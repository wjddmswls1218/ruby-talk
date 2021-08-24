let globalReceiveId = "";

const friendClickHandler = (receiveId) => {
  msgBox = document.getElementById("msgBox-js");

  globalReceiveId = receiveId;

  if (msgBox.style.display === "flex") {
    msgBox.style.display = "none";
    globalReceiveId = "none";
  } else {
    msgBox.style.display = "flex";
  }
};

const closeMsgBox = () => {
  msgBox = document.getElementById("msgBox-js");
  msgBox.style.display = "none";
};

const sendAction = () => {
  const msgContent = document.getElementById("msgContent-js");

  const formTag = document.createElement("form");
  formTag.action = "/sendMsg";
  formTag.method = "post";
  formTag.name = "sendMsgForm";

  const receiveIdInput = document.createElement("input");
  receiveIdInput.type = "text";
  receiveIdInput.name = "receiveId";
  receiveIdInput.setAttribute("value", globalReceiveId);

  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.name = "msg";
  messageInput.setAttribute("value", msgContent.value);

  formTag.appendChild(receiveIdInput);
  formTag.appendChild(messageInput);

  formTag.style.display = "none";
  document.body.appendChild(formTag);

  formTag.submit();
};

