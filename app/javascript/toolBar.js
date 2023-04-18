/** 편집 모드 (일반 텍스트 모드)와 HTML 모드, 미리보기 모드를 번갈아 사용하기 위해 또 다른 div를 렌더 시에 숨깁니다. */
const useEffect = () => {
  window.onload = function () {
    $(".editorHTMLArticle").hide();
    CurrentWord();
    // CheckStyle();
  };
};

const init = () => {
  useEffect();
};

init();

const activateButton = (event) => {
  //   console.log(event.target);
  const line = event.target.getElementsByTagName("line");
  const path = event.target.getElementsByTagName("path");

  //   console.log(event.target.getAttribute("style"));
  if (event.target.getAttribute("style") === null) {
    event.target.style.backgroundColor = "#333333";
  } else if (event.target.getAttribute("style")) {
    event.target.removeAttribute("style");
  }

  console.log(path);
  if (line.length >= 1) {
    const lineNode = Array.from(line);
    lineNode.map((item) => {
      //   console.log(item.getAttribute("stroke"));
      if (item.getAttribute("stroke") !== "white") {
        item.setAttribute("stroke", "white");
      } else if (item.getAttribute("stroke") === "white") {
        item.setAttribute("stroke", "#333333");
      }
    });
  }

  if (path.length >= 1) {
    const pathNode = Array.from(path);
    pathNode.map((item) => {
      //   if (item.getAttribute("stroke") !== "white") {
      //     item.setAttribute("stroke", "white");
      //   } else if (item.getAttribute("stroke") === "white") {
      //     item.setAttribute("stroke", "black");
      //   }
      if (item.getAttribute("fill") !== "white") {
        item.setAttribute("fill", "white");
      } else if (item.getAttribute("fill") === "white") {
        item.setAttribute("fill", "#333333");
      }
    });
  }
};

const fontToggleOn = () => {
  // let selected = window.getSelection().getRangeAt(0);
  // console.log(selected);

  event.stopPropagation();

  const list = document.getElementById("selectbox-option");
  const body = document.getElementsByTagName("body")[0];

  if (list.getAttribute("style")) {
    list.removeAttribute("style");
  } else {
    list.style.display = "flex";
  }
  
  return false;
};

const globalToggleOff = () => {
  const list = document.getElementById("selectbox-option");

  if (list.getAttribute("style")) {
    list.removeAttribute("style");
  }
};

/** 서식을 지정할 요소들을 command 매개변수로 담아 execCommand로 지정을 해줍니다. */
const ChangeInhabitStyle = (command, variableState, variableValue) => {

  let selected = window.getSelection().getRangeAt(0);
  console.log(selected);

  if (variableState === false) {
    document.execCommand(command);
    console.log(command, variableState);
  } else {
    if (command === "font-color") {
      const colorIcon = document.querySelector("#colorIcon");
      document.execCommand(`foreColor`, false, variableValue);
    }

    if (command === "font-background-color") {
      const colorIcon = document.querySelector("#colorIcon2");
      console.log(colorIcon);
      document.execCommand(`hiliteColor`, false, variableValue);
    }

    if (command === "font-size") {
      document.execCommand("fontSize", false, variableValue);
    }
  }
  console.log("!!");
  // CheckStyle();
};

/** 사용자가 선택한 서식의 동기화를 진행합니다. **/
const CheckStyle = () => {
  const buttonOfBold = document.querySelector(".bold");
  const buttonOfItalic = document.querySelector(".italic");
  const buttonOfUnderline = document.querySelector(".underLine");
  const buttonOfQuitline = document.querySelector(".quitLine");
  const buttonOfSplitLine = document.querySelector(".splitLine");
  const buttonOfJustifyLeft = document.querySelector(".justifyLeft");
  const buttonOfJustifyCenter = document.querySelector(".justifyCenter");
  const buttonOfJustifyRight = document.querySelector(".justifyRight");

  console.log(document.queryCommandValue);

  if (document.queryCommandState("bold")) {
    buttonOfBold.style.opacity = "50%";
  } else {
    buttonOfBold.style.opacity = "100%";
  }

  if (document.queryCommandState("italic")) {
    buttonOfItalic.style.opacity = "50%";
  } else {
    buttonOfItalic.style.opacity = "100%";
  }

  if (document.queryCommandState("underline")) {
    buttonOfUnderline.style.opacity = "50%";
  } else {
    buttonOfUnderline.style.opacity = "100%";
  }

  if (document.queryCommandState("StrikeThrough")) {
    buttonOfQuitline.style.opacity = "50%";
  } else {
    buttonOfQuitline.style.opacity = "100%";
  }

  if (document.queryCommandState("justifyCenter")) {
    buttonOfJustifyCenter.style.opacity = "50%";
  } else {
    buttonOfJustifyCenter.style.opacity = "100%";
  }
};

function CurrentWord() {
  const contentWord = document.querySelector(".editorTextArticle");
  const wordLength = document.querySelector("#wordLength");
  // console.log(wordLength.innerText.length);
  // console.log(wordLength.innerText);
  wordLength.innerText = `현재 글자 수 : ${contentWord.innerText.length}`;
}
