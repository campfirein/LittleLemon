def roman_to_int(s):
	"""
	Convert a Roman numeral to an integer.

	Args:
		s (str): Roman numeral as a string.

	Returns:
		int: The integer value of the Roman numeral.
	"""
	# Define the value for each Roman numeral
	roman_values = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
	
	total = 0
	prev_value = 0
	
	# Iterate over the Roman numeral from right to left
	for char in reversed(s):
		current_value = roman_values[char]
		
		# If the current value is smaller than the previous one, subtract it
		if current_value < prev_value:
			total -= current_value
		else:
			total += current_value
		
		# Update the previous value for the next iteration
		prev_value = current_value
	
	return total


# Example usage
roman_numeral = "MCMXCIV"  # Example: 1994
print(roman_to_int(roman_numeral))  # Output: 1994