def is_valid(s: str) -> bool:
    """
    Check if the input string of parentheses is valid.

    Args:
        s (str): Input string containing '(', ')', '{', '}', '[' and ']'.

    Returns:
        bool: True if the string is valid, False otherwise.
    """
    # Map closing brackets to their corresponding opening brackets
    bracket_map = {')': '(', '}': '{', ']': '['}
    stack = []

    # Iterate through each character in the string
    for char in s:
        if char in bracket_map:
            # Pop the top of the stack if it exists, else use a dummy value
            top_element = stack.pop() if stack else '#'
            # If the top of the stack doesn't match the corresponding opening bracket
            if bracket_map[char] != top_element:
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