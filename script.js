
function calculateAge() {
    const dobValue = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobValue) {
        result.textContent = "Please select your date of birth.";
        return;
    }

    const [year, month, day] = dobValue.split("-").map(Number);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
        result.textContent = "Please select a valid date of birth.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.textContent =
        `Your Age: ${years} Years, ${months} Months, ${days} Days`;
}
