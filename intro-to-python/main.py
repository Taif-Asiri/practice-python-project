
print("Welcome to python")

# Variables written in snake_case
my_name = "George"
print(my_name)

my_name = "Asti"
print(my_name)

# Write constant variables in SCREAMING_SNAKE_CASE
# This is not an enforced constant - It's just a convention
MY_CONSTANT = 5

# in JS typeof, type() in Python

print(type(40))
print(type(3.14))
print(type(my_name))
print(type(False))
# None is the same as null/undefined in JS (We don't have undefined in Python)
print(type(None))

print("hello" + my_name)

my_age = 32

# Be mindful of the datatypes and convert them appropriately
print("Hello " + my_name + " You are " + str(my_age))

print("Hello", 40, "George", 30)

# Maths

# Addition
print(6 + 4)

# Subtraction
print(10 - 5)

# Multiply
print(7 * 3)

# Divide
print(10 / 3)
print(10 // 3)

# Modulo
print(10 % 3)

# Exponents
print(3 ** 3)


# Assignment Shortcuts
# ++ and -- doesn't work in python 🥲
my_num = 5

my_num += 4

print(my_num)

my_num /= 3

print(my_num)
# f String
# `hello ${variable}` - Template Literals in JS

my_string = f"Hello my number is: {my_num}"
print(my_string)