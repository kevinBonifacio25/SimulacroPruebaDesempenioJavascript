
export function renderTaskDetails() {
  return `
  <div class="min-h-screen bg-gray-100 p-6">

    <div class="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">

      <div class="flex justify-between mb-6">

        <h1 class="text-3xl font-bold">
          Diseño del Dashboard
        </h1>

        <span
          class="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Completada
        </span>

      </div>

      <div class="space-y-5">

        <div>
          <h3 class="font-semibold text-gray-600">
            Descripción
          </h3>

          <p class="text-gray-700 mt-2">
            Crear la interfaz principal para visualizar las tareas.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-gray-600">
            Prioridad
          </h3>

          <p>Alta</p>
        </div>

        <div>
          <h3 class="font-semibold text-gray-600">
            Fecha límite
          </h3>

          <p>25/06/2026</p>
        </div>

      </div>

      <div class="flex gap-4 mt-8">

        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-lg">
          Editar
        </button>

        <button
          class="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg">
          Eliminar
        </button>

      </div>

    </div>

  </div>
  `;
}