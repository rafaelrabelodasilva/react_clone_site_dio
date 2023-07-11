import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {
    //useState permite que você adicione o estado a um componente funcional. O estado é basicamente uma forma de armazenar e controlar dados dentro de um componente.

    const [age, setAge] = useState(26)
    const [name, setName] = useState('Pablo')

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('Age atual', age, newAge)
        setAge(prev => prev === 26 ? 32 : 26)
    },[age])

    //useCallback retorna uma versão memorizada de uma função. É útil quando você precisa passar uma função para um componente filho, garantindo que a função não seja recriada a cada renderização desnecessariamente. Ele é especialmente útil quando usado em conjunto com o memo para evitar renderizações desnecessárias de componentes.

    const handleChangeName = useCallback(() => {
        console.log('Alterou nome')
        setName(prev => prev === 'Pablo' ? 'Rafael' : 'Pablo')
    },[])

    //useEffect permite executar efeitos colaterais em um componente funcional. Efeitos colaterais são ações que ocorrem fora do escopo principal do componente, como fazer uma requisição HTTP, manipular o DOM ou subscrever a eventos. Você pode pensar nele como uma forma de dizer ao React: "Ei, execute este código depois que o componente for renderizado".
    useEffect(() => {
        handleChangeAge()
    }, [])

    //useMemo permite memorizar o resultado de uma função computacionalmente intensiva. Ele é usado para otimizar o desempenho, evitando o cálculo repetido de valores que não mudam com frequência. Quando você envolve uma função com useMemo, o React irá armazenar o valor retornado por essa função e só irá recalculá-lo se as dependências fornecidas mudarem.
    const calculo = useMemo(() => {
        console.log('Calculou', age)
        return 10 * age;
    }, [age]);

    console.log('Renderizou', calculo);



    return (
        <div>
            <p>
                Idade: {age}
            </p>
            <p>
                Nome: {name}
            </p>
            <button onClick={handleChangeAge}>Alterar idade</button><br /> <br />
            <button onClick={handleChangeName}>Alterar nome</button>
        </div>
    )
}

export { Teste }