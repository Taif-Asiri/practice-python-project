# user_input = input('give me a number: ')

# message = 10 + user_input
    
# print(user_input)


try:
    #some code that might cause an error
    my_file = open('data.txt', 'r')

except FileNotFoundError:
    # what should happen if something goes wrong
    print('Oops the file name is incorrect')
    
except IsADirectoryError:
    print('you have specified a directory not a file')
    
except Exception:
    print('something went wrong')
else:
#     #will run only if no expetions
    print(my_file.read())
finally:
#     # will always happen at the end
    print('Thank you for using the file reader program')    
    