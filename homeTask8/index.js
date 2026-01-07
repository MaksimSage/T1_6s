const fileInput = document.getElementById('fileInput')
const processBtn = document.getElementById('processBtn')

processBtn.onclick = async () => {
    const file = fileInput.files[0]
    if (!file) return
    
    const text = await file.text()
    console.log(`Вход:`)    
    console.log(text)


    const map = new Map() 

    // получение строк
    const lines = text.split(/\r\n/)  
    
    for (const line of lines) {
        if (!line.includes(':')) continue // пропускаем пустые строки из файла

        const [name, numStr] = line.split(':')
        const num = parseInt(numStr)
        if (isNaN(num)) continue // пропускаем если нет числа
        
        const resultName = name[0].toUpperCase() + name.slice(1).toLowerCase()

        if (!map.has(num)) {
          map.set(num, [])
        }

        map.get(num).push(resultName) 
    }
    
    const sorted = [...map.entries()].sort((a, b) => b[0] - a[0])

    const result = sorted.map(([num, names]) => `${num}:[${names.join(', ')}]`)
    
    console.log('Выход:') 
    console.log(`[${result.join(', ')}]`)
} 