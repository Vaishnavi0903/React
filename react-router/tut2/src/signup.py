import tkinter as tk

# Create a function to handle the signup action
def signup():
    username = username_entry.get()
    password = password_entry.get()

    # Replace this with your actual signup logic
    # For this example, we'll print the signup information
    print("Username:", username)
    print("Password:", password)
    result_label.config(text="Signup Successful", fg="green")

# Create the main window
root = tk.Tk()
root.title("Signup Page")

# Create and pack username label and entry field
username_label = tk.Label(root, text="Username:")
username_label.pack()
username_entry = tk.Entry(root)
username_entry.pack()

# Create and pack password label and entry field
password_label = tk.Label(root, text="Password:")
password_label.pack()
password_entry = tk.Entry(root, show="*")  # Use "show" to hide the password
password_entry.pack()

# Create and pack signup button
signup_button = tk.Button(root, text="Signup", command=signup)
signup_button.pack()

# Create a label to display the signup result
result_label = tk.Label(root, text="", fg="black")
result_label.pack()

root.mainloop()
