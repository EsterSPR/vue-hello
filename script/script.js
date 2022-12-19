const { createApp } = Vue

createApp({
    data() {
        return{
            nome: 'Alberto',
            cognome: 'Angela',
            immagine: 'https://images2.corriereobjects.it/methode_image/2018/11/24/Interni/Foto%20Interni%20-%20Trattate/Alberto%20Angela%202ttcredit%20Barbara%20Ledda-khbD-U307042592216kb-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20181125153444'
        }
    }
}).mount('#app')