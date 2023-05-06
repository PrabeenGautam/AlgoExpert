array = [3, 4, 5, 6, 7, 8, 1, 2, -2]
target = 11


# Solution 1 (Take o(n^2) times) and Storage: O(1)
def calculateTwoSum1(nums: list[int], target: int) -> list[int]:
    for index, num in enumerate(nums):
        substract_value = target - num

        for sec_index in range(index + 1, len(nums)):
            if nums[sec_index] == substract_value:
                return [num, substract_value]
    return []


# Solution 2: using hashtable time complexity: O(n) and Storage: O(n)
def calculateTwoSum2(array: list[int], target: int) -> list[int]:
    visited = {}
    for index in range(len(array)):
        first_number = array[index]
        compliment = target - first_number
        if compliment in visited:
            return [first_number, compliment]
        else:
            visited[first_number] = True
    return []


# O(nlogn) complexity and Storage: O(1)
# sort array: quick, merge or heap sort
# [1, 2, 3, 4, 5, 6]
#  L              R
# if L + R < target : increase left pointer by 1 and check again
# if greater, decrease right pointer by 1 and check again


def calculateTwoSum3(array: list[int], target: int) -> list[int]:
    # Focus on question, sorting will be done for later questions
    array.sort()
    length = len(array)

    left_pointer = 0
    right_pointer = length - 1

    while left_pointer < right_pointer:
        desired_target = left_pointer + right_pointer
        if desired_target == target:
            return [array[left_pointer], array[right_pointer]]
        elif desired_target < target:
            left_pointer += 1
        else:
            right_pointer -= 1
    return []


# Consoling Outputs
numbers = calculateTwoSum3(array, target)
print(numbers)
