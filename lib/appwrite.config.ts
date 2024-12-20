

import * as sdk from 'node-appwrite';

// const {
//     PROJECT_ID,
//     API_KEY,
//     DATABASE_ID,
//     PATIENT_COLLECTION_ID,
//     DOCTOR_COLLECTION_ID,
//     APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT,
// } = process.env;

export const PROJECT_ID='674a1145001e1f9b082f'
export const    API_KEY='standard_e9f17af4f2df32d0236229473f6f26c8e78c794eeec8929e3410fef923b2c34e430b26e32c133de295abb88989884fc31582988e8337a5fb38358f005e7279d61989c7d4acada5d6f49aa5ce6e92b8e915f75cbd099bd4ad391cb8f2044179bb154c3180e53702d12d8b6161b3bae5e3486072a640c6c37f8a429bcc32255880'
export const DATABASE_ID='674cb69900230f27677e'

export const PATIENT_COLLECTION_ID='674cb6ad000c0ba89c30'
export const DOCTOR_COLLECTION_ID='674cb6c100079b16ec28'
export const APPOINTMENT_COLLECTION_ID='674cb6d3001caaf5d0b6'
export const NEXT_PUBLIC_BUCKET_ID='674cef6d0014a56469fe'
export const NEXT_PUBLIC_ENDPOINT='https://cloud.appwrite.io/v1'



console.log('PROJECT_ID', PROJECT_ID);
console.log('API_KEY', API_KEY);
console.log('DATABASE_ID', DATABASE_ID);
console.log('PATIENT_COLLECTION_ID', PATIENT_COLLECTION_ID);
console.log('DOCTOR_COLLECTION_ID', DOCTOR_COLLECTION_ID);
console.log('APPOINTMENT_COLLECTION_ID', APPOINTMENT_COLLECTION_ID);
console.log('NEXT_PUBLIC_BUCKET_ID', NEXT_PUBLIC_BUCKET_ID);
console.log('NEXT_PUBLIC_ENDPOINT', NEXT_PUBLIC_ENDPOINT);

const client = new sdk.Client();
client
    .setEndpoint(NEXT_PUBLIC_ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const database = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
