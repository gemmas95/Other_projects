// Fake api call, with 1s of delay to simulate the api call
import documentsMock from "../mocks/document.mock";

export async function getDocuments() {
  const success = true;
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(documentsMock);
      } else {
        reject({ message: "Error", ok: false });
      }
    }, 1000);
  });
}

export async function saveDocument(document) {
  const success = true;
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(document);
      } else {
        reject({ message: "Error", ok: false });
      }
    }, 1000);
  });
}

export async function deletingDocument(id) {
  const success = true;
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(id);
      } else {
        reject({ message: "Error", ok: false });
      }
    }, 1000);
  });
}
