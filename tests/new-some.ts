import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { NewSome } from '../target/types/new_some';

describe('new-some', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.NewSome as Program<NewSome>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
