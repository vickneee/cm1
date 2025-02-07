# Self-Assessment  of Code

# Self-Assessment (Template)

### Example 1: Handling User Input and Adding Contacts

Initially, the input handling and adding contacts functionality was straightforward, but it lacked validation and handling for empty input fields. Here's the original implementation:  

```javascript
function addContact() {
  if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
    setContacts((c) => [...c, { name, email, phone }]);
    setName("");
    setEmail("");
    setPhone(""); // Clear the input fields
  }
}
```
While this method ensured that only valid contacts were added, there were no checks for duplicate contacts, incorrect input types (e.g., invalid phone numbers), or more robust user feedback.

#### Solution: Improved Validation and User Feedback

To improve the user experience, I introduced a few enhancements:

- Duplicate Contact Handling: Ensured that the same contact can't be added multiple times.
- Validation for Correct Phone Format: Checked for valid phone numbers before allowing a contact to be added.
- User Feedback: Displayed a message to the user if the form is incomplete or if the contact already exists.

Here's the updated implementation:

```javascript
function addContact() {
  if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Check for duplicate contacts
  const duplicate = contacts.some(
    (contact) => contact.email === email || contact.phone === phone
  );
  if (duplicate) {
    alert("This contact already exists.");
    return;
  }

  setContacts((c) => [...c, { name, email, phone }]);
  setName("");
  setEmail("");
  setPhone(""); // Clear the input fields
}

```
##### Key Improvements:

- Validation: Prevented empty fields and duplicate contacts.
- User Feedback: Provided alerts to improve the user experience, notifying them of missing data or duplicate entries.

### Example 2: Deleting Contacts and Updating State

In the initial code, deleting contacts was handled by filtering out the contact based on the index. Here's the original implementation:

```javascript
function deleteContact(index) {
  const updatedContacts = contacts.filter((_, i) => i !== index);
  setContacts(updatedContacts);
}
```
This approach worked fine, but it could be made more efficient or user-friendly.

#### Solution: Optimized Deletion

The solution remains the same, but we can improve this further by using a more descriptive method of identifying contacts (like using unique IDs) instead of relying on indices. However, for simplicity, the current implementation is fine for the current setup.

#### Lessons Learned:

Efficiency: Using indices for deletion works fine for small lists, but using unique identifiers (like a UUID) would scale better in larger applications.
Testing: I tested the functionality to ensure the correct contact was deleted, and the contacts were properly updated in the state.

### Example 3: Input State Management

Initially, I had the following redundant code for input changes:

```javascript
const handleNameChange = (e) => {
  setName(prevName => prevName = e.target.value);
};
const handleEmailChange = (e) => {
  setEmail(prevEmail => prevEmail = e.target.value);
};
const handlePhoneChange = (e) => {
  setPhone(prevPhone => prevPhone = e.target.value);
};

```

This was unnecessarily complex. The prevName = e.target.value was redundant as setName already takes care of the state update.

### Solution: Simplified State Management

I simplified the event handlers like this:

```javascript
const handleNameChange = (e) => setName(e.target.value);
const handleEmailChange = (e) => setEmail(e.target.value);
const handlePhoneChange = (e) => setPhone(e.target.value);
```

#### Key Improvement:
Simplified Logic: Removed redundant code and simplified state management for readability and efficiency.

### Summary of Improvements:

- Code Simplification: Reduced unnecessary state management complexity.
- Validation: Added checks for empty fields and duplicate contacts.
- Efficiency: Kept the deletion approach simple but identified potential improvements for scalability.