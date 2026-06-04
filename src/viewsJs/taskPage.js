export function renderTasksPage() {
  return `
  <div class="min-h-screen bg-gray-100 p-6">

    <div class="max-w-6xl mx-auto">

      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">
          Mis tareas
        </h1>

        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          + Nueva tarea
        </button>
      </div>

      <div class="bg-white p-4 rounded-xl shadow mb-6">
        <input
          type="text"
          placeholder="Buscar tarea..."
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div class="overflow-x-auto bg-white rounded-xl shadow">

        <table class="w-full">

          <thead class="bg-gray-100">
            <tr>
              <th class="text-left p-4">Título</th>
              <th class="text-left p-4">Estado</th>
              <th class="text-left p-4">Fecha</th>
              <th class="text-center p-4">Acciones</th>
            </tr>
          </thead>

          <tbody id="tasksTableBody">

          </tbody>

        </table>

      </div>

    </div>

  </div>
  `;
}