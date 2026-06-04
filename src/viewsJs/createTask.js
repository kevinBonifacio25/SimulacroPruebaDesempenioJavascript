
export function renderCreateTask() {
  return `
  <div class="min-h-screen bg-gray-100 flex justify-center items-center p-6">

    <div class="bg-white w-full max-w-xl p-8 rounded-xl shadow">

      <h1 class="text-2xl font-bold mb-6">
        Crear tarea
      </h1>

      <form id="taskForm" class="space-y-5">

        <div>
          <label class="block mb-2 font-medium">
            Título
          </label>

          <input
            type="text"
            class="w-full border rounded-lg p-3">
        </div>

        <div>
          <label class="block mb-2 font-medium">
            Descripción
          </label>

          <textarea
            rows="4"
            class="w-full border rounded-lg p-3"></textarea>
        </div>

        <div>
          <label class="block mb-2 font-medium">
            Fecha límite
          </label>

          <input
            type="date"
            class="w-full border rounded-lg p-3">
        </div>

        <div>
          <label class="block mb-2 font-medium">
            Prioridad
          </label>

          <select class="w-full border rounded-lg p-3">
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
          </select>
        </div>

        <div class="flex gap-4">

          <button
            type="submit"
            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            Guardar
          </button>

          <button
            type="button"
            class="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded-lg">
            Cancelar
          </button>

        </div>

      </form>

    </div>

  </div>
  `;
}