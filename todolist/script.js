// Selezioniamo dal DOM gli elementi necessari
const taskHolder = document.getElementById("task-holder");
const addTaskBtn = document.getElementById("add-task-button");
const inputComponent = document.getElementById("input-component");

// Evento "click" sul pulsante "Aggiungi"
addTaskBtn.addEventListener("click", () => {
    const titoloDelTask = inputComponent.value.trim();

    // Verifichiamo se l'utente ha scritto qualcosa
    if (titoloDelTask.length === 0) {
        alert("Il campo non può essere vuoto.");
        return;
    }

    // Se c'è del testo, aggiungiamo il task
    addTask(titoloDelTask);

    // Puliamo il campo di testo per inserire un nuovo task
    inputComponent.value = "";
});

/**
 * Crea un nuovo elemento "task" e lo aggiunge al contenitore "task-holder"
 * @param {string} taskText - Il testo del task inserito dall'utente
 */
function addTask(taskText) {
  // Creiamo il contenitore principale del task
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // Creiamo un elemento span per il testo del task
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;
  taskLabel.classList.add("task-label");
  taskItem.appendChild(taskLabel);

  // Pulsante "Fatto" - contrassegna il task come completato
  const completeButton = document.createElement("button");
  completeButton.textContent = "Fatto";
  completeButton.classList.add("complete-btn");
  completeButton.addEventListener("click", () => {
    // Se viene cliccato "Fatto", rimuoviamo l'eventuale stato "rifiutato"
    taskItem.classList.remove("rejected");
    // ...e alterniamo lo stato "done"
    taskItem.classList.toggle("done");
  });
  taskItem.appendChild(completeButton);

  // Pulsante "Rifiuta" - contrassegna il task come non accettato
  const rejectButton = document.createElement("button");
  rejectButton.textContent = "Rifiuta";
  rejectButton.classList.add("reject-btn");
  rejectButton.addEventListener("click", () => {
    // Se viene cliccato "Rifiuta", rimuoviamo l'eventuale stato "done"
    taskItem.classList.remove("done");
    // ...e alterniamo lo stato "rejected"
    taskItem.classList.toggle("rejected");
  });
  taskItem.appendChild(rejectButton);

  // Pulsante "Elimina" - rimuove completamente il task dalla lista
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Elimina";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    // Rimuoviamo il task dal contenitore principale
    taskHolder.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  // Aggiungiamo il taskItem al contenitore generale
  taskHolder.appendChild(taskItem);
}
