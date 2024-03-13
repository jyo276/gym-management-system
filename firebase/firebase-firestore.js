// firebase/firebase-firestore.js
const firestore = firebase.firestore();

// Function to add a member to Firestore
function addMember(memberData) {
    return firestore.collection('members').add(memberData);
}

// Function to update member details in Firestore
function updateMember(memberId, updatedData) {
    return firestore.collection('members').doc(memberId).update(updatedData);
}

// Function to get all members from Firestore
function getAllMembers() {
    return firestore.collection('members').get();
}

// Function to create a bill in Firestore
function createBill(billData) {
    return firestore.collection('bills').add(billData);
}

// Function to get all bills from Firestore
function getAllBills() {
    return firestore.collection('bills').get();
}

// Add more Firestore functions based on your requirements
