
export function renderDashboard() {
  return `
  <div class="min-h-screen bg-gray-100">

    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">
          Task Manager
        </h1>

        <button
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Cerrar sesión
        </button>
      </div>
    </header>

    <main class="max-w-7xl mx-auto p-6">

      <div class="grid md:grid-cols-3 gap-6 mb-8">

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-gray-500">Total tareas</h3>
          <p class="text-4xl font-bold text-blue-600">24</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-gray-500">Completadas</h3>
          <p class="text-4xl font-bold text-green-600">16</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="text-gray-500">Pendientes</h3>
          <p class="text-4xl font-bold text-orange-500">8</p>
        </div>

      </div>

      <div class="bg-white p-6 rounded-xl shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">
            Últimas tareas
          </h2>

          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Nueva tarea
          </button>
        </div>

        <div id="recentTasks"></div>
      </div>

    </main>
  </div>
  `;
}