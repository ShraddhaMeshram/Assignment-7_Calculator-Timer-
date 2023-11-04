$(document).ready(function() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let displaySeconds = 0;
    let displayMinutes = 0;
    let displayHours = 0;
    let interval = null;
    let status = "stopped";

    // Function to update the stopwatch display
    function updateStopwatchDisplay() {
        $('#display').html(displayHours + ":" + displayMinutes + ":" + displaySeconds);
    }

    // Stopwatch logic
    function stopWatch() {
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }
        displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        displayHours = hours < 10 ? "0" + hours : hours;
        updateStopwatchDisplay();
    }

    // Delay function
    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Start the stopwatch
    $('#starttimer').on('click', async function() {
        status = "started";
        $('#starttimer').prop('disabled', true);
        while (status !== "stopped") {
            await delay(1000);
            stopWatch();
        }
    });

    // Stop the stopwatch
    $('#stoptimer').on('click', function() {
        $('#starttimer').prop('disabled', false);
        clearInterval(interval);
        status = "stopped";
    });

    // Reset the stopwatch
    $('#reset').on('click', function() {
        clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        displaySeconds = "00";
        displayMinutes = "00";
        displayHours = "00";
        updateStopwatchDisplay();
    });

    // Function to get the current date in the 'YYYY-MM-DD' format
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Set the value of the date picker to the current date
    $('#date-picker').val(getCurrentDate());

    // const datePicker = $('#date-picker');

    // // Store the original date
    // const originalDate = getCurrentDate();

    // // Handle the change event of the date picker
    // datePicker.on('change', function() {
    //     // If the user tries to change the date, reset it to the original date
    //     if (datePicker.val() !== originalDate) {
    //         datePicker.val(originalDate);
    //     }
    // });
});
