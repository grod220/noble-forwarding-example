import { createGrpcWebTransport } from '@connectrpc/connect-web';
import { createClient } from '@connectrpc/connect';
import { Any } from '@bufbuild/protobuf';
import { MsgRegisterAccount } from './protos/noble/forwarding/v1/tx_pb';
import { Service } from './protos/cosmos/tx/v1beta1/service_connect';
import { BroadcastMode } from './protos/cosmos/tx/v1beta1/service_pb';
import { SignMode } from './protos/cosmos/tx/signing/v1beta1/signing_pb';
import { Tx } from './protos/cosmos/tx/v1beta1/tx_pb';
import { ForwardingPubKey } from './protos/noble/forwarding/v1/account_pb';

const CHANNEL = 'channel-221';
const PENUMBRA_ADDR =
    'penumbra1dg0vjhx8smcyfktj25u6fm0njwc2uavfcrvekqz85unuwaednrzmdhfeudp3ch4wgvv9wr0304gz0sayr5vu870wdxpj67zfx5hw0g0q7m5aka0pc7dp5shw7m4zcawx2yjq5h';
const NOBLE_BECH32 = 'noble139m3vy6tv5tulc0fukyaucgqpgrxl27n9q4vv2';
const NOBLE_BYTES = new Uint8Array([
    137, 119, 22, 19, 75, 101, 23, 207, 225, 233, 229, 137, 222, 97, 0, 10, 6, 111, 171, 211,
]);

const transport = createGrpcWebTransport({
    baseUrl: 'http://noble-testnet-grpc.polkachu.com:21590',
});
const client = createClient(Service, transport);

const registerAccount = async () => {
    const msg = new MsgRegisterAccount({
        signer: NOBLE_BECH32,
        recipient: PENUMBRA_ADDR,
        channel: CHANNEL,
    });

    const pubKey = new ForwardingPubKey({ key: NOBLE_BYTES });

    const tx = new Tx({
        body: {
            messages: [Any.pack(msg)],
        },
        authInfo: {
            signerInfos: [
                {
                    publicKey: Any.pack(pubKey),
                    modeInfo: { sum: { case: 'single', value: { mode: SignMode.DIRECT } } },
                },
            ],
        },
        signatures: [],
    });

    const res = await client.broadcastTx({
        mode: BroadcastMode.SYNC,
        txBytes: tx.toBinary(),
    });

    console.log(res);
};

void registerAccount();
