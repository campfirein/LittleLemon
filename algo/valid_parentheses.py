BRACKET_MAP = {')': '(', '}': '{', ']': '['}

def is_valid(s: str) -> bool:
    """
    Check if the input string of parentheses is valid.

    Args:
        s (str): Input string containing '(', ')', '{', '}', '[' and ']'.

    Returns:
        bool: True if the string is valid, False otherwise.
    """
    if not s:  # Handle empty string case
        return True
    if len(s) % 2 != 0:  # Early return for odd-length strings
        return False
    if not isinstance(s, str):
        raise TypeError('Input must be a string')
    # Map closing brackets to their corresponding opening brackets
    stack = []

    # Iterate through each character in the string
    valid_chars = set('()[]{}')  # Define valid characters
    if not all(char in valid_chars for char in s):
        return False
    for char in s:
        if char in BRACKET_MAP:
            # Pop the top of the stack if it exists, else use a dummy value
            if not stack:
                return False
            top_element = stack.pop() if stack else '#'
            # If the top of the stack doesn't match the corresponding opening bracket
            if BRACKET_MAP[char] != top_element:
                return False
        else:
            # Push the opening bracket onto the stack
            stack.append(char)

    # Return True if the stack is empty (all brackets matched)
    return not stack

if __name__ == "__main__":
    # Test cases
    print(is_valid("()"))         # Output: True
    print(is_valid("()[]{}"))     # Output: True
    print(is_valid("(]"))         # Output: False
    print(is_valid("([)]"))       # Output: False
    print(is_valid("{[]}"))       # Output: True