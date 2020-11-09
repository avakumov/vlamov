import moment from 'moment'
const tasks = [
    {
        id: '55',
        title: 'задача1',
        description: 'описание 1',
        super: false,
        children: [],
        status: 'новая',
        actions: [],
        durationMins: 155,
        difficulty: 2,
        importance: 2,
        color: 'lightgreen',
        day: '3',
        marks: [],
        created: Date.now
    },
    {
        id: '56',
        title: 'задача2',
        description: 'описание 2',
        super: false,
        children: [],
        status: 'новая',
        actions: [],
        durationMins: 185,
        difficulty: 3,
        importance: 2,
        color: 'lightgreen',
        day: '3',
        marks: [],
        created: Date.now
    },
    {
        id: '57',
        title: 'задача3',
        description: 'описание 3',
        super: false,
        children: [],
        status: 'новая',
        actions: [],
        durationMins: 60,
        difficulty: 3,
        importance: 2,
        color: 'lightgreen',
        day: null,
        marks: [],
        created: Date.now
    },
    {
        id: '58',
        title: 'задача4',
        description: 'описание 4',
        super: false,
        children: [],
        status: 'done',
        actions: [],
        durationMins: 90,
        difficulty: 3,
        importance: 2,
        color: 'lightgreen',
        day: null,
        marks: [],
        created: Date.now
    },
    {
        id: '59',
        title: 'задача 5',
        description: 'описание 5',
        super: false,
        children: [],
        status: 'done',
        actions: [],
        durationMins: 120,
        difficulty: 3,
        importance: 2,
        color: 'lightgreen',
        day: null,
        marks: [],
        created: Date.now
    }
]

const days = [
    {
        key: '1',
        id: '1',
        date: moment().add(1, 'days'),
        tasks: [],
        dayType: 'Обычный'
    },
    {
        key: '2',
        id: '2',
        date: moment(),
        tasks: [],
        dayType: 'Обычный'
    },
    {
        key: '3',
        id: '3',
        date: moment().add(2, 'days'),
        tasks: [],
        dayType: 'Обычный'
    },
    {
        key: '4',
        id: '4',
        date: moment().add(3, 'days'),
        tasks: [],
        dayType: 'Обычный'
    }
]

const awards = [
    { id: 1, image: 'https://html-online.com/image.jpg', tasks: [] },
    { id: 2, image: 'https://probation.gov.ph/wp-content/uploads/2018/09/Awards.png', tasks: [] }
]

const daysColumns = [
    {
        title: 'Date',
        dataIndex: 'date'
    },
    {
        title: 'Tasks',
        dataIndex: 'tasks'
    },
    {
        title: 'Duration',
        dataIndex: 'duration'
    },
    {
        title: 'Avarage difficulty',
        dataIndex: 'avarageDifficulty'
    },
    {
        title: 'Avarage Importance',
        dataIndex: 'avarageImportance'
    }
]

export const initState = {
    tasks: {
        days,
        tasks: [],
        awards,
        selectedDays: [],
        daysColumns
    }
}
