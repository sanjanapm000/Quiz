   let currentQuestion = 0;
      const questions = document.querySelectorAll(".question");

      window.onload = () => {
        questions[currentQuestion].style.display = "block";
      };

      function check(element, isCorrect) {
        const allOptions = element.parentElement.querySelectorAll(".option");
        allOptions.forEach(opt => opt.onclick = null); // disable further clicks

        if (isCorrect) {
          element.classList.add("correct");
          element.textContent += " ✅";
        } else {
          element.classList.add("incorrect");
          element.textContent += " ❌";
        }
      }

      function nextQues() {
        questions[currentQuestion].style.display = "none";
        currentQuestion++;
        if (currentQuestion < questions.length) {
          questions[currentQuestion].style.display = "block";
        } else {
          document.querySelector("button").style.display = "none";
          alert("Quiz complete! 🎉");
          document.getElementsByTagName('article')[0].style.display="none"
        }
      }
