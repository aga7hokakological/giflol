import * as anchor from '@project-serum/anchor';
// import { Program } from '@project-serum/anchor';
// import { NewSome } from '../target/types/new_some';

// describe('new-some', () => {

//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.Provider.env());

//   const program = anchor.workspace.NewSome as Program<NewSome>;

//   it('Is initialized!', async () => {
//     // Add your test here.
//     const tx = await program.rpc.initialize({});
//     console.log("Your transaction signature", tx);
//   });
// });


const { systemProgram }: any = anchor.web3;

const main = async() => {
  console.log("Testing begins")

  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const baseAccount = anchor.web3.Keypair.generate();

  const program = anchor.workspace.Gifyadd;

  const tx = await program.rpc.startGifyAdd({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: systemProgram.programId,
    },

    signers: [baseAccount]
  });

  let account = await program.account.baseAccount.fetch(baseAccount.publicKey)
  console.log("GIF account is", account);

  await program.rpc.addGif({
    accounts: {
      baseAccount: baseAccount.publicKey,
    }
  })

  account = await program.account.baseAccount.fetch(baseAccount.publicKey)
  console.log("Sig --", tx);
}

const runMain = async() => {
};

runMain();