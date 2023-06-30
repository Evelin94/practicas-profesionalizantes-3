class TicketList extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
      this.attachEvents();
    }
  
    render() {
      this.innerHTML = `
        <style>
          /* Estilos específicos del componente */
          table {
            width: 100%;
            border-collapse: collapse;
          }
  
          td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ccc;
          }
  
          th {
            background-color: gray;
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ccc;
          }
  
          .baja {
            background-color: yellowgreen;
          }
  
          .media {
            background-color: yellow;
          }
  
          .urgente {
            background-color: red;
          }
        </style>
  
        <h1>Tickets</h1>
  
        <h2>Agregar Ticket</h2>
        <label for="tipo">Tipo:</label>
        <select id="tipo">
          <option value="falla">Falla</option>
          <option value="requerimiento">Requerimiento</option>
        </select>
        <br>
        <label for="prioridad">Prioridad:</label>
        <select id="prioridad">
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="urgente">Urgente</option>
        </select>
        <br>
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion">
        <button id="agregarButton">Agregar</button>
  
        <table id="ticketTable" style="display: none;">
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Prioridad</th>
          </tr>
        </table>
      `;
    }
  
    attachEvents() {
      const agregarButton = this.querySelector('#agregarButton');
      agregarButton.addEventListener('click', this.confirmAddTicket.bind(this));
    }
  
    confirmAddTicket() {
      const type = this.querySelector('#tipo').value;
      const description = this.querySelector('#descripcion').value;
      const priority = this.querySelector('#prioridad').value;
  
      if (description.trim() === '') {
        alert('Por favor, ingrese una descripción para el ticket.');
        return;
      }
  
      const confirmation = confirm('¿Desea agregar este ticket?');
      if (confirmation) {
        const ticketTable = this.querySelector('#ticketTable');
        const row = document.createElement('tr');
        const typeCell = document.createElement('td');
        typeCell.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;
        const priorityCell = document.createElement('td');
        priorityCell.className = priority;
        priorityCell.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
  
        row.appendChild(typeCell);
        row.appendChild(descriptionCell);
        row.appendChild(priorityCell);
        ticketTable.appendChild(row);
        ticketTable.style.display = 'table';
  
        // Limpiar campos después de agregar un ticket
        this.querySelector('#tipo').value = 'falla';
        this.querySelector('#descripcion').value = '';
        this.querySelector('#prioridad').value = 'baja';
  
        alert('Ticket agregado correctamente.');
      }
    }
  }
  
  customElements.define('ticket-list', TicketList);
  