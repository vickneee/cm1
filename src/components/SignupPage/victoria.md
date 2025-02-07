# Self-Assessment of Code

### Prevent Form Submission (Fix Default Behavior)

Right now, when the user clicks “Sign Up”, the form submits and refreshes the page because there’s no onSubmit handler. You should prevent default submission like this:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Add form submission logic here (e.g., API call)
};
```
```javascript
<form onSubmit={handleSubmit}>
```

---

### Improve Email & Password Validation Messages

Instead of showing both "Invalid email address" and "You typed a valid email", show only one message:

Before: (Both messages might appear)
```javascript
{emailValid === false && <p>Invalid email address</p>}
{emailValid === true && <p>You typed a valid email</p>}
```

Better Approach: (Show one at a time)
```javascript
{emailValid !== null && (
  <p className={emailValid ? "text-green-600" : "text-red-600"}>
    {emailValid ? "✔ Valid email" : "✖ Invalid email address"}
  </p>
)}
```
✔ Same for password validation!

---
