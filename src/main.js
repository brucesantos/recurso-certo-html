// Importando Tailwind Plus Elements via npm
import '@tailwindplus/elements';

console.log('✅ Script carregado - Elements carregado via npm!');

// Verificar se os elementos estão disponíveis
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM carregado, Elements deve estar ativo');
    
    // Aguardar um pouco para o Elements carregar
    setTimeout(() => {
        // Teste adicional - verificar se os elementos foram inicializados
        const disclosureElements = document.querySelectorAll('el-disclosure');
        const dropdownElements = document.querySelectorAll('el-dropdown');
        
        console.log(`📊 Encontrados ${disclosureElements.length} el-disclosure elements`);
        console.log(`📊 Encontrados ${dropdownElements.length} el-dropdown elements`);
        
        // Verificar se o Elements está disponível globalmente
        console.log('🔍 Verificando disponibilidade do Elements...');
        console.log('Custom elements disponíveis:', Object.keys(customElements.get || {}));
        
        // Verificar se os elementos customizados foram registrados
        const elDisclosure = customElements.get('el-disclosure');
        const elDropdown = customElements.get('el-dropdown');
        
        console.log('el-disclosure registrado:', !!elDisclosure);
        console.log('el-dropdown registrado:', !!elDropdown);
        
        // Testar se os elementos estão funcionando
        if (disclosureElements.length > 0) {
            console.log('🧪 Testando disclosure...');
            const firstDisclosure = disclosureElements[0];
            console.log('Disclosure element:', firstDisclosure);
            console.log('Disclosure constructor:', firstDisclosure.constructor.name);
        }
        
        if (dropdownElements.length > 0) {
            console.log('🧪 Testando dropdown...');
            const firstDropdown = dropdownElements[0];
            console.log('Dropdown element:', firstDropdown);
            console.log('Dropdown constructor:', firstDropdown.constructor.name);
            
            // Verificar o menu dentro do dropdown
            const menu = firstDropdown.querySelector('el-menu');
            if (menu) {
                console.log('Menu element:', menu);
                console.log('Menu position:', menu.getBoundingClientRect());
                console.log('Menu computed style:', window.getComputedStyle(menu).position);
            }
        }
        
        // Adicionar teste manual
        const testButton = document.getElementById('testButton');
        if (testButton) {
            testButton.addEventListener('click', () => {
                console.log('🔧 Teste manual iniciado...');
                
                // Testar disclosure
                const disclosure = document.querySelector('el-disclosure');
                if (disclosure) {
                    console.log('Disclosure encontrado:', disclosure);
                    console.log('Disclosure tem método toggle?', typeof disclosure.toggle === 'function');
                    console.log('Disclosure tem método show?', typeof disclosure.show === 'function');
                    console.log('Disclosure tem método hide?', typeof disclosure.hide === 'function');
                    
                    // Tentar toggle manual
                    try {
                        disclosure.toggle();
                        console.log('✅ Disclosure toggle executado');
                    } catch (e) {
                        console.error('❌ Erro ao fazer toggle do disclosure:', e);
                    }
                }
                
                // Testar dropdown
                const dropdown = document.querySelector('el-dropdown');
                if (dropdown) {
                    console.log('Dropdown encontrado:', dropdown);
                    console.log('Dropdown tem método showPopover?', typeof dropdown.showPopover === 'function');
                    console.log('Dropdown tem método hidePopover?', typeof dropdown.hidePopover === 'function');
                }
            });
        }
    }, 100);
});
