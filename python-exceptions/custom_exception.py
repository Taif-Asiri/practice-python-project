# All Custom Errors MUST inherit from the base Excption Class
class Error(Exception):
    pass

class ValueTooSmallError(Exception):
    # be raised when the number is too small
    pass

class ValueTooLargeError(Exception):
    pass

while True:
    try:
        guess = int(input('Gimmeh a number:'))
        
        if guess < 10:
            raise ValueTooSmallError
        elif guess > 10:
            raise ValueTooLargeError
    except ValueTooLargeError:
        print('Too High')
    except ValueTooSmallError:
        print('Too Small')