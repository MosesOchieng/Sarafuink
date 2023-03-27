use std::str::FromStr;
use substrate_api_client::{Api, utils::hexstr_to_vec};

// Address of the Polkadot network to connect to
const ADDR: &str = "wss://rpc.polkadot.io";

// The amount of DOTs to transfer
const AMOUNT: u128 = 1000000000000;

// The destination account's address
const DESTINATION_ACCOUNT: &str = "5EYCAeJAbkEgaYJvC8CKRfw1B2LBUnH5zw5Z5cJZFnwV7Fkz";

fn main() {
    // Connect to the Polkadot network
    let api = Api::new(ADDR).unwrap();

    // Create a keypair from the private key of the sender account
    let sender_private_key = hexstr_to_vec("5a5f5e5d5c5b5a5f5e5d5c5b5a5f5e5d5c5b5a5f5e5d5c5b5a5f5e5d5c5b5a5f").unwrap();
    let sender = api.restore().unwrap().key_pair_from_seed(sender_private_key.as_slice()).unwrap();

    // Create a transaction to transfer the specified amount of DOTs to the destination account
    let destination_account = pallet_contracts::AccountId::from_str(DESTINATION_ACCOUNT).unwrap();
    let xt = api.tx_balances_transfer(&sender, &destination_account, AMOUNT, 0).unwrap();

    // Sign and send the transaction
    api.send_extrinsic(xt.hex_encode(), substrate_api_client:: XtStatus::InBlock).unwrap();

    // Display a message to indicate that the transaction has been processed
    println!("Transaction processed successfully.");
}
