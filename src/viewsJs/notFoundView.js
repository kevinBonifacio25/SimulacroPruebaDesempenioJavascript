export function notFoundView() {
    return `
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center font-sans">
        <div class="max-w-md">
            <h1 class="text-9xl font-black text-gray-200">404</h1>
            
            <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                ¡Página no encontrada!
            </p>
        
            <p class="mt-4 text-gray-500 italic">"No todos los que vagan están perdidos, pero esta página definitivamente lo está."</p>
        
            <a href="#/" class="mt-6 inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all active:scale-95 shadow-md">
                Volver al Inicio
            </a>
        </div>
    </div>
    `;
}