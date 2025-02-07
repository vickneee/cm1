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

### Set a Fixed Height for the Message

To keep the space for the validation message even when it’s not displayed, you can always render an empty <p> tag with a fixed height. This prevents the layout from shifting when the message appears.


### Improve Email & Password Validation Messages

Instead of showing both "Invalid email address" and "You typed a valid email", show only one message:

Before: (Both messages might appear)
```jsx
{emailValid === false && <p>Invalid email address</p>}
{emailValid === true && <p>You typed a valid email</p>}
```

Better Approach: (Show one at a time)
```jsx
<p className={`h-5 text-sm ${emailValid === null ? "text-transparent" : emailValid ? "text-green-600" : "text-red-600"}`}>
  {emailValid === null ? "" : emailValid ? "✔ Valid email" : "✖ Invalid email"}
</p>
```
✔ Same for password validation!

---
