array = [5, 1, 22, 25, 5, 6, -1, 8, 10]
sequence = [5, 1, 22, 22, 25, 5, 6, -1, 8, 10]


def isValidSequence(array: list[int], sequence: list[int]) -> bool:
    seq_pointer = 0
    for value in array:
        if value == sequence[seq_pointer] and seq_pointer < len(sequence):
            seq_pointer += 1

        if seq_pointer == len(sequence):
            return True
    return False


print(isValidSequence(array, sequence))
