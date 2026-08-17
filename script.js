function validateForm() {

    let age = document.getElementById("age").value;
    let bmi = document.getElementById("bmi").value;
    let hba1c = document.getElementById("hba1c").value;
    let glucose = document.getElementById("glucose").value;

    if (age <= 0) {
        alert("Please enter a valid age");
        return false;
    }

    if (bmi <= 0) {
        alert("Please enter a valid BMI");
        return false;
    }

    if (hba1c <= 0) {
        alert("Please enter a valid HbA1c level");
        return false;
    }

    if (glucose <= 0) {
        alert("Please enter a valid blood glucose level");
        return false;
    }

    return true;
}