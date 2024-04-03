import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormControl } from '@angular/forms';

export interface State {
    name: string;
    abbr: string;
}

export interface StateGroup {
    letter: string;
    states: State[];
}

export const _filter = (opt: State[], value: string): State[] => {
    const filterValue = value.toLowerCase();

    return opt.filter(item => item.name.toLowerCase().includes(filterValue));
};

@Component({
    selector: 'autocomplete-optgroup-example',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        AsyncPipe,

    ],
})

export class AppComponent implements OnInit {
    stateForm = this._formBuilder.group({
        stateGroupControl: '',
    });


    stateGroups: StateGroup[] = [
        {
            "letter": "A",
            "states": [
                {
                    "name": "Alabama",
                    "abbr": "AL"
                },
                {
                    "name": "Alaska",
                    "abbr": "AK"
                },
                {
                    "name": "Arizona",
                    "abbr": "AZ"
                },
                {
                    "name": "Arkansas",
                    "abbr": "AR"
                }
            ]
        },
        {
            "letter": "C",
            "states": [
                {
                    "name": "California",
                    "abbr": "CA"
                },
                {
                    "name": "Colorado",
                    "abbr": "CO"
                },
                {
                    "name": "Connecticut",
                    "abbr": "CT"
                }
            ]
        },
        {
            "letter": "D",
            "states": [
                {
                    "name": "Delaware",
                    "abbr": "DE"
                }
            ]
        },
        {
            "letter": "F",
            "states": [
                {
                    "name": "Florida",
                    "abbr": "FL"
                }
            ]
        },
        {
            "letter": "G",
            "states": [
                {
                    "name": "Georgia",
                    "abbr": "GA"
                }
            ]
        },
        {
            "letter": "H",
            "states": [
                {
                    "name": "Hawaii",
                    "abbr": "HI"
                }
            ]
        },
        {
            "letter": "I",
            "states": [
                {
                    "name": "Idaho",
                    "abbr": "ID"
                },
                {
                    "name": "Illinois",
                    "abbr": "IL"
                },
                {
                    "name": "Indiana",
                    "abbr": "IN"
                },
                {
                    "name": "Iowa",
                    "abbr": "IA"
                }
            ]
        },
        {
            "letter": "K",
            "states": [
                {
                    "name": "Kansas",
                    "abbr": "KS"
                },
                {
                    "name": "Kentucky",
                    "abbr": "KY"
                }
            ]
        },
        {
            "letter": "L",
            "states": [
                {
                    "name": "Louisiana",
                    "abbr": "LA"
                }
            ]
        },
        {
            "letter": "M",
            "states": [
                {
                    "name": "Maine",
                    "abbr": "ME"
                },
                {
                    "name": "Maryland",
                    "abbr": "MD"
                },
                {
                    "name": "Massachusetts",
                    "abbr": "MA"
                },
                {
                    "name": "Michigan",
                    "abbr": "MI"
                },
                {
                    "name": "Minnesota",
                    "abbr": "MN"
                },
                {
                    "name": "Mississippi",
                    "abbr": "MS"
                },
                {
                    "name": "Missouri",
                    "abbr": "MO"
                },
                {
                    "name": "Montana",
                    "abbr": "MT"
                }
            ]
        },
        {
            "letter": "N",
            "states": [
                {
                    "name": "Nebraska",
                    "abbr": "NE"
                },
                {
                    "name": "Nevada",
                    "abbr": "NV"
                },
                {
                    "name": "New Hampshire",
                    "abbr": "NH"
                },
                {
                    "name": "New Jersey",
                    "abbr": "NJ"
                },
                {
                    "name": "New Mexico",
                    "abbr": "NM"
                },
                {
                    "name": "New York",
                    "abbr": "NY"
                },
                {
                    "name": "North Carolina",
                    "abbr": "NC"
                },
                {
                    "name": "North Dakota",
                    "abbr": "ND"
                }
            ]
        },
        {
            "letter": "O",
            "states": [
                {
                    "name": "Ohio",
                    "abbr": "OH"
                },
                {
                    "name": "Oklahoma",
                    "abbr": "OK"
                },
                {
                    "name": "Oregon",
                    "abbr": "OR"
                }
            ]
        },
        {
            "letter": "P",
            "states": [
                {
                    "name": "Pennsylvania",
                    "abbr": "PA"
                }
            ]
        },
        {
            "letter": "R",
            "states": [
                {
                    "name": "Rhode Island",
                    "abbr": "RI"
                }
            ]
        },
        {
            "letter": "S",
            "states": [
                {
                    "name": "South Carolina",
                    "abbr": "SC"
                },
                {
                    "name": "South Dakota",
                    "abbr": "SD"
                }
            ]
        },
        {
            "letter": "T",
            "states": [
                {
                    "name": "Tennessee",
                    "abbr": "TN"
                },
                {
                    "name": "Texas",
                    "abbr": "TX"
                }
            ]
        },
        {
            "letter": "U",
            "states": [
                {
                    "name": "Utah",
                    "abbr": "UT"
                }
            ]
        },
        {
            "letter": "V",
            "states": [
                {
                    "name": "Vermont",
                    "abbr": "VT"
                },
                {
                    "name": "Virginia",
                    "abbr": "VA"
                }
            ]
        },
        {
            "letter": "W",
            "states": [
                {
                    "name": "Washington",
                    "abbr": "WA"
                },
                {
                    "name": "West Virginia",
                    "abbr": "WV"
                },
                {
                    "name": "Wisconsin",
                    "abbr": "WI"
                },
                {
                    "name": "Wyoming",
                    "abbr": "WY"
                }
            ]
        }
    ];


    stateGroupOptions!: Observable<StateGroup[]>;

    constructor(private _formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroupControl')!.valueChanges.pipe(
            startWith(''),
            map(value => this._filterGroup(value || '')),
        );
        //    this.stateForm.controls['stateGroupControl'].setValue(this.stateGroups[0].states[0]);
    }

    // Set the default value for for the field to the State object





    private _filterGroup(value: string): StateGroup[] {
        console.log("value: ", value);
        return this.stateGroups.reduce(function (result: StateGroup[], option: StateGroup) {
            const filteredStates = option.states.filter(item => item.name.toLowerCase().includes(typeof value === "string" ? value.toLowerCase() : ''));
            if (filteredStates.length > 0) {
                result = result.concat({
                    letter: option.letter,
                    states: filteredStates
                });
            }
            return result;
        }, []);
    }

    OnSubmit() {
        console.log(this.stateForm.value);
        console.log(((this.stateForm.get('stateGroupControl')?.value as unknown) as State).abbr);
    }

    stateDisplayFn(state: State): string {
        return state && state.name ? state.name : '';
    }
}