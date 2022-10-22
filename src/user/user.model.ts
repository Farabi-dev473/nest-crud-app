export class User {
    id: string
    name: string
    age: number
    adult: boolean

    setId(id: string) {
        this.id = id
        return this
    }

    setName(name: string) {
        this.name = name
        return this
    }

    setAge(age: number) {
        this.age = age
        return this
    }

    setAdult(adult: boolean) {
        this.adult = adult
        return this
    }
}