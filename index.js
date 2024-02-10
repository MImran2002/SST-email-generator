let emailSample = {
    "0": " this is initiator alert response ", // These data are dummy data.
    "1": " this is request feedback ",
    "2": " this is responding to feedback ",
    "3": " this is update on case mandatory ",
    "4": " this is update on non mandatory ",
    "5": " this is update on initiator reach out ",
};



document.getElementById("submit_button").addEventListener("click", function(){

    for (let i = 0; i < 6; i++){
        if (document.getElementById("checkbox"+ i).checked){
            var linebreak = document.createElement("HR");
            
            var breaks = document.createElement("br");
            document.getElementById("span"+ i).innerHTML = studentName + emailSample[i] + profName;
            document.getElementById("span"+i).appendChild(breaks);
            
            document.getElementById("span"+i).appendChild(linebreak);
        }
    }
})
/*These codes will be used over second phase during copy and paste functionality being added.
var button = document.createElement("button");
const studentName = document.getElementById("Student_Name").value;
console.log(studentName);
const profName = document.getElementById("Professor_Name").value;
console.log(profName);
            button.innerHTML = 'copy';
            button.onclick = function (){
                // Get the text field
                for (let a = 0; a < 6; a++){
                    var copyText = document.getElementById("span"+i);
                    const tempInput = document.createElement("input");
                    // Set the value of the input to the text content of the span
                    tempInput.value = copyText.innerText;
                    // Append the input to the body (required for copying)
                    document.body.appendChild(tempInput);
                    // Select the text in the input
                    tempInput.select();
                    // Copy the selected text
                    document.execCommand("copy");
                    
                    // Remove the temporary input
                    document.body.removeChild(tempInput);
                    
                    // Optionally, provide feedback to the user
                    alert("Text copied to clipboard: " + tempInput.value);
                    }
                }
            };document.getElementById("span"+i).appendChild(button);
*/