export function loginView(){
    return ` <div class="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans">
        <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl border border-gray-100">
         <form id="loginForm" class="mt-4 space-y-6">

            <h2 class="text-3xl font-bold text-center text-gray-800 tracking-tight">Iniciar Sesión</h2>

            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700 ml-1">Correo Electrónico</label>
                <input type="text" id="email" placeholder="ejemplo@correo.com" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400">
                <small id="emailError" class="text-xs text-red-500 px-1 h-4 block font-medium"></small>
            </div>

            <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700 ml-1">Contraseña</label>
                <input type="password" id="password" placeholder="••••••••" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400">
                <small id="passwordError" class="text-xs text-red-500 px-1 h-4 block font-medium"></small>
            </div>

            <button type="submit" class="w-full py-3 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-[0.98]">Ingresar</button>

            <p id="successMessage" class="text-sm text-green-600 text-center font-medium"></p>

        </form>
        </div>
    </div>`
}