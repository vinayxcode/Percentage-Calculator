let total_marks_input = document.querySelector('input[placeholder="Enter total marks obtained"]');
let number_of_subjects_input = document.querySelector('input[placeholder="Enter number of subjects"]');
let calculate_button = document.querySelector('button');
let result_paragraph = document.querySelector('.result');
calculate_button.addEventListener('click', function() {
    let total_marks = parseFloat(total_marks_input.value);
    let number_of_subjects = parseFloat(number_of_subjects_input.value);
    if (isNaN(total_marks) || isNaN(number_of_subjects) || number_of_subjects === 0) {
        result_paragraph.textContent = "Please enter valid numbers.";
        return;
    }
    let percentage = (total_marks / (number_of_subjects * 100)) * 100;
    result_paragraph.textContent = "Percentage: " + percentage.toFixed(2) + "%";
});
