export interface Route {
    id: string
    uid: string
    succeded: boolean
    belayMode: string
    grade: any
    endingMode: EndingMode
    updatedAt: Date
    createdAt: Date
}

export interface ClimbingGrade {
    gradeValue: IGrade
    gradeType: string
}

export interface IGrade {
    key: number
    value: string
}

export interface EndingMode {
    flash: boolean
    onSight: boolean
}

export const GRADE_BASE = {
    FR_SET: [
        {
            key: 0, 
            value:'4a'
        },
        {
            key: 1, 
            value:'4a+'
        },
        {
            key: 2, 
            value:'4b'
        },
        {
            key: 3, 
            value:'4b+'
        },
        {
            key: 4, 
            value:'4c'
        },
        {
            key: 5, 
            value:'4c+'
        },
        {
            key: 6, 
            value:'5a'
        },
        {
            key: 7, 
            value:'5a+'
        },
        {
            key: 8, 
            value:'5b'
        },
        {
            key: 9, 
            value:'5b+'
        },
        {
            key: 10, 
            value:'5c'
        },
        {
            key: 11, 
            value:'5c+'
        },
        {
            key: 12, 
            value:'6a'
        },
        {
            key: 13, 
            value:'6a+'
        },
        {
            key: 14, 
            value:'6b'
        },
        {
            key: 15, 
            value:'6b+'
        },
        {
            key: 16, 
            value:'6c'
        },
        {
            key: 17, 
            value:'6c+'
        },
        {
            key: 18, 
            value:'7a'
        },
        {
            key: 19, 
            value:'7a+'
        },
        {
            key: 20, 
            value:'7b'
        },
        {
            key: 21, 
            value:'7b+'
        },
        {
            key: 22, 
            value:'7c'
        },
        {
            key: 23, 
            value:'7c+'
        },
        {
            key: 24, 
            value:'8a'
        },
        {
            key: 25, 
            value:'8a+'
        },
        {
            key: 26, 
            value:'8b'
        },
        {
            key: 27, 
            value:'8b+'
        },
        {
            key: 28, 
            value:'8c'
        },
        {
            key: 29, 
            value:'8c+'
        },
        {
            key: 30, 
            value:'9a'},
    ],
    PL_SET: [
        {
            key: 0,
            value:'IV+'
        },
        {
            key: 1,
            value:'V-'
        },
        {
            key: 2,
            value:'V'
        },
        {
            key: 3,
            value:'V+'
        },
        {
            key: 4,
            value:'VI-'
        },
        {
            key: 5,
            value:'VI'
        },
        {
            key: 6,
            value:'VI+'
        },
        {
            key: 7,
            value:'VI.1'
        },
        {
            key: 8,
            value:'VI.1+'
        },
        {
            key: 9,
            value:'VI.2'
        },
        {
            key: 10,
            value:'VI.2+'
        },
        {
            key: 11,
            value:'VI.3'
        },
        {
            key: 12,
            value:'VI.3+'
        },
        {
            key: 13,
            value:'VI.4'
        },
        {
            key: 14,
            value:'VI.4+'
        },
        {
            key: 15,
            value:'VI.5'
        },
        {
            key: 16,
            value:'VI.5+'
        },
        {
            key: 17,
            value:'VI.6'
        },
        {
            key: 18,
            value:'VI.6+'
        },
        {
            key: 19,
            value:'VI.7'
        },
        {
            key: 20,
            value:'VI.7+'
        },
        {
            key: 21,
            value:'VI.8'
        },
    ],
    PL_FIRST: {
        key: 2, 
        value: 'V'
    },
    FR_FIRST: {
        key: 6, 
        value: '5a'
    }
}