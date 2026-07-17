export interface ErrorCode {
  code: string;
  meaning: string;
  cause: string;
  diySteps: string[];
}

export interface BrandCodes {
  brand: string;
  brandSlug: string;
  codes: ErrorCode[];
}

export interface ApplianceCodes {
  slug: string;
  title: string;
  serviceId: string;
  brands: BrandCodes[];
}

export function codeSlug(code: string) {
  return code
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const errorCodes: ApplianceCodes[] = [
  {
    slug: 'washer',
    title: 'Washer',
    serviceId: 'washer-repair',
    brands: [
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: '4E / 4E1',
            meaning: 'Water supply/fill error',
            cause: 'Water valve turned off, kinked supply hose, or low household water pressure.',
            diySteps: [
              'Make sure both hot and cold water valves behind the machine are fully open.',
              'Check the fill hoses for kinks, and clean the inlet screens if water pressure is low elsewhere in the house.',
            ],
          },
          {
            code: 'LE / LE1',
            meaning: 'Leakage detected in the tub',
            cause: 'Failed drain pump, worn tub seal, or a blocked drain line.',
            diySteps: [
              'Pause the cycle and check underneath and around the machine for standing water.',
              "Make sure the machine is level — sensors can misread on an uneven floor. If a leak is visible, don't run another cycle until it's inspected.",
            ],
          },
          {
            code: 'OE / 3E',
            meaning: 'Overflow or motor/drain error',
            cause: 'Drain hose kinked or clogged, or a failing drain pump.',
            diySteps: [
              'Check that the drain hose isn\'t kinked and sits at the correct height (typically 30–96 inches).',
              'Clear any visible clog in the drain hose or standpipe.',
            ],
          },
          {
            code: 'UE / UB',
            meaning: 'Unbalanced load',
            cause: 'Load shifted to one side; if it repeats every cycle, often worn suspension springs.',
            diySteps: [
              'Redistribute the load evenly around the drum and restart the cycle.',
              'Avoid washing a single bulky item (comforter, pillow) alone — add a towel or two to balance it.',
            ],
          },
        ],
      },
      {
        brand: 'LG',
        brandSlug: 'lg',
        codes: [
          {
            code: 'LE',
            meaning: 'Motor locked rotor',
            cause: 'Drive motor or motor control board fault, sometimes triggered by an overloaded drum.',
            diySteps: [
              'Reduce the load size — an overloaded drum can trigger this.',
              'Power-cycle the washer at the breaker for 1 minute, then restart.',
            ],
          },
          {
            code: 'UE',
            meaning: 'Unbalanced load',
            cause: 'Load redistribution needed; recurring UE can mean worn suspension.',
            diySteps: [
              'Redistribute the load evenly and restart.',
              'If it happens on every cycle, the load may be too small — add another item or two.',
            ],
          },
          {
            code: 'OE',
            meaning: 'Drain error',
            cause: 'Clogged drain filter/pump, or a kinked drain hose.',
            diySteps: [
              'Clean the drain pump filter (usually behind a small door at the bottom front).',
              'Check the drain hose for kinks or clogs.',
            ],
          },
          {
            code: 'dE / dE2',
            meaning: 'Door not detected as closed',
            cause: 'Door latch or door lock assembly failure.',
            diySteps: [
              'Open and firmly reclose the door until it clicks.',
              'Check for anything obstructing the door latch.',
            ],
          },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        brandSlug: 'whirlpool-maytag',
        codes: [
          {
            code: 'F5 E2 / F5 E3',
            meaning: 'Door lock error',
            cause: 'Failed door lock/switch assembly on front-load models.',
            diySteps: [
              "Make sure the door is fully closed and nothing is caught in the seal.",
              'Power-cycle the washer at the breaker for 1 minute before restarting.',
            ],
          },
          {
            code: 'F7 E1',
            meaning: 'Motor drive error',
            cause: 'Motor control board or wiring fault.',
            diySteps: [
              'Power-cycle the washer at the breaker.',
              'If the code returns immediately, avoid running further cycles — this usually needs a technician.',
            ],
          },
          {
            code: 'F8 E1',
            meaning: 'Water fill error',
            cause: 'Water inlet valve issue or low household water pressure.',
            diySteps: [
              'Confirm both water valves are fully open.',
              'Check supply hoses for kinks or a clogged inlet screen.',
            ],
          },
          {
            code: 'Sud / SUdS',
            meaning: 'Excess suds detected',
            cause: 'Too much detergent, or a non-HE detergent used in an HE machine.',
            diySteps: [
              'Run a rinse/spin cycle to clear excess suds.',
              'Switch to a High-Efficiency (HE) detergent and use less than you think you need.',
            ],
          },
        ],
      },
      {
        brand: 'GE',
        brandSlug: 'ge',
        codes: [
          {
            code: 'dE / dC',
            meaning: 'Door/lid not latched',
            cause: "Lid lock/switch failure, or the door isn't fully closing.",
            diySteps: [
              'Firmly close the lid/door until it clicks.',
              'Check the latch area for anything blocking it.',
            ],
          },
          {
            code: 'IE',
            meaning: 'Water fill/inlet error',
            cause: 'Water supply valve closed, or a faulty inlet valve.',
            diySteps: [
              'Confirm the water supply valves are open.',
              'Check for kinked or frozen supply lines.',
            ],
          },
          {
            code: 'oE',
            meaning: 'Overflow condition',
            cause: 'Drain hose height/routing issue, or a stuck-open water valve.',
            diySteps: [
              'Check the drain hose height and routing.',
              'Clear any visible clog in the drain line.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'dryer',
    title: 'Dryer',
    serviceId: 'dryer-repair',
    brands: [
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: 'HE / hE',
            meaning: 'Heating error',
            cause: 'Failed heating element or thermal fuse.',
            diySteps: [
              "Check that the lint filter and vent aren't clogged — restricted airflow is the most common cause.",
              "If lint is clear and it still won't heat, the heating element likely needs replacing.",
            ],
          },
          {
            code: 'tE / tE1',
            meaning: 'Thermistor error',
            cause: 'Faulty temperature sensor.',
            diySteps: [
              'Power-cycle the dryer at the breaker.',
              'This is a sensor fault — if it returns, it needs a technician to test/replace the thermistor.',
            ],
          },
          {
            code: 'dE / dE1',
            meaning: 'Door error',
            cause: 'Door switch not detecting a closed door.',
            diySteps: [
              'Firmly close the door until it clicks.',
              'Check the door switch/strike for lint buildup or damage.',
            ],
          },
        ],
      },
      {
        brand: 'LG',
        brandSlug: 'lg',
        codes: [
          {
            code: 'dE',
            meaning: 'Door error',
            cause: 'Door switch or latch fault.',
            diySteps: [
              'Firmly close the door until it clicks.',
              'Check the door switch/strike for lint buildup or damage.',
            ],
          },
          {
            code: 'tE',
            meaning: 'Thermistor error',
            cause: 'Faulty temperature sensor.',
            diySteps: [
              'Power-cycle the dryer at the breaker.',
              'This is a sensor fault — if it returns, it needs a technician to test/replace it.',
            ],
          },
          {
            code: 'AE',
            meaning: 'Moisture sensor error',
            cause: 'Sensor bar needs cleaning, or a sensor circuit fault.',
            diySteps: [
              'Wipe down the metal moisture sensor bars inside the drum with a damp cloth — residue buildup is the most common cause.',
              'Run an empty cycle to see if it clears.',
            ],
          },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        brandSlug: 'whirlpool-maytag',
        codes: [
          {
            code: 'PF',
            meaning: 'Power failure detected',
            cause: 'Household power was interrupted mid-cycle; usually clears on its own.',
            diySteps: [
              'This just logs that power was interrupted — press Start to resume or restart the cycle.',
              'No action needed if clothes are drying normally afterward.',
            ],
          },
          {
            code: 'F1',
            meaning: 'Control board error',
            cause: 'Main control board fault.',
            diySteps: [
              'Power-cycle the dryer at the breaker for 1 minute.',
              'If it returns right away, the control board likely needs service.',
            ],
          },
          {
            code: 'E1 / F70',
            meaning: 'Thermistor or communication error (model-dependent)',
            cause: 'Sensor or wiring fault — exact meaning varies by model number.',
            diySteps: [
              'Power-cycle the dryer at the breaker.',
              "Check your model number against Whirlpool/Maytag's code chart, since this code varies by platform.",
            ],
          },
        ],
      },
      {
        brand: 'GE',
        brandSlug: 'ge',
        codes: [
          {
            code: 'E1',
            meaning: 'Thermistor open circuit',
            cause: 'Faulty temperature sensor.',
            diySteps: [
              'Check the lint filter and vent for a clog.',
              'Power-cycle at the breaker; if it returns, the sensor likely needs replacing.',
            ],
          },
          {
            code: 'E2',
            meaning: 'Thermistor short circuit',
            cause: 'Faulty temperature sensor or wiring.',
            diySteps: [
              'Power-cycle the dryer at the breaker.',
              'This usually points to a wiring or sensor fault that needs a technician.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'refrigerator',
    title: 'Refrigerator',
    serviceId: 'refrigerator-repair',
    brands: [
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: '22 C / 22 E',
            meaning: 'Defrost sensor error',
            cause: 'Faulty defrost sensor or wiring.',
            diySteps: [
              'Power-cycle the fridge by unplugging it for 5 minutes.',
              "If the code returns, the defrost sensor likely needs replacing — this isn't a DIY part swap.",
            ],
          },
          {
            code: '5E / 5E1',
            meaning: 'Ice maker error',
            cause: 'Ice maker fan or sensor fault.',
            diySteps: [
              "Check that the ice maker's water line isn't frozen or kinked.",
              'Power-cycle the fridge; if ice production doesn\'t resume, the ice maker module may need service.',
            ],
          },
        ],
      },
      {
        brand: 'LG',
        brandSlug: 'lg',
        codes: [
          {
            code: 'Er FF',
            meaning: 'Freezer sensor fault',
            cause: 'Faulty freezer compartment temperature sensor.',
            diySteps: [
              "Check that the freezer vents inside aren't blocked by food packages.",
              'Power-cycle the fridge at the outlet for 5 minutes.',
            ],
          },
          {
            code: 'Er rF',
            meaning: 'Fridge sensor fault',
            cause: 'Faulty refrigerator compartment temperature sensor.',
            diySteps: [
              "Check that the fridge vents inside aren't blocked by food or containers.",
              'Power-cycle the fridge at the outlet for 5 minutes.',
            ],
          },
        ],
      },
      {
        brand: 'GE, Whirlpool & Sub-Zero',
        brandSlug: 'ge-whirlpool-sub-zero',
        codes: [
          {
            code: 'Blinking light / panel alert',
            meaning: "Most GE, Whirlpool, and Sub-Zero refrigerators don't use a shared numeric fault code system",
            cause: "Meaning is model-specific — check your use & care guide, or call us and we'll pull the actual fault with diagnostic tools.",
            diySteps: [
              "Check your owner's manual for what the specific light pattern or beep sequence means on your model.",
              "If the fridge isn't cooling properly, don't wait — food safety is on the line. Call us so we can pull the exact fault.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'dishwasher',
    title: 'Dishwasher',
    serviceId: 'dishwasher-repair',
    brands: [
      {
        brand: 'Bosch',
        brandSlug: 'bosch',
        codes: [
          {
            code: 'E15',
            meaning: 'Leak sensor tripped (Aquastop)',
            cause: 'Water detected in the base pan — could be an active leak or a failed float switch.',
            diySteps: [
              "Unplug the dishwasher and mop up any standing water in the base — don't run it again until it's inspected.",
              'Check that the machine is level; an unlevel installation can trip the float switch falsely.',
            ],
          },
          {
            code: 'E24',
            meaning: 'Drain error',
            cause: 'Clogged drain pump, hose, or air gap.',
            diySteps: [
              'Clean the drain filter at the bottom of the tub.',
              'Check the garbage disposal knockout plug if the dishwasher was recently installed alongside a new disposal.',
            ],
          },
          {
            code: 'E01',
            meaning: 'Heating circuit fault',
            cause: 'Failed heating element or thermostat.',
            diySteps: [
              'Power-cycle the dishwasher at the breaker.',
              "This usually points to a failed heating element — not a DIY repair.",
            ],
          },
        ],
      },
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: 'LC / LE',
            meaning: 'Leak detected',
            cause: 'Leak sensor tripped in the base pan.',
            diySteps: [
              'Unplug the unit and check for standing water in the base pan.',
              'Make sure the dishwasher is level.',
            ],
          },
          {
            code: 'OE / 5E',
            meaning: 'Drain error',
            cause: 'Clogged filter, drain hose, or pump.',
            diySteps: [
              'Clean the drain filter and check the drain hose for kinks.',
              'Check the air gap or garbage disposal knockout if newly installed.',
            ],
          },
          {
            code: 'HE',
            meaning: 'Heating error',
            cause: 'Failed heating element.',
            diySteps: [
              'Power-cycle at the breaker.',
              'A heating element fault typically needs a technician.',
            ],
          },
        ],
      },
      {
        brand: 'Whirlpool, Maytag & GE',
        brandSlug: 'whirlpool-maytag-ge',
        codes: [
          {
            code: 'F1 – F9 (model-dependent)',
            meaning: 'Control board, motor, or sensor fault',
            cause: 'Exact meaning varies significantly by model year — check your use & care guide, or call for an exact read.',
            diySteps: [
              'Power-cycle the dishwasher at the breaker for 1 minute.',
              "Check your model number against the manufacturer's code chart — these vary a lot by year, so we recommend calling for an exact read.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'oven',
    title: 'Oven & Range',
    serviceId: 'oven-range-repair',
    brands: [
      {
        brand: 'GE',
        brandSlug: 'ge',
        codes: [
          {
            code: 'F1 / F2 / F3',
            meaning: 'Control board or sensor fault',
            cause: 'Oven temperature sensor or control board issue.',
            diySteps: [
              'Power-cycle the range at the breaker for 1 minute.',
              'If the code returns right away, avoid using the oven until it\'s inspected — F codes often mean a stuck relay.',
            ],
          },
          {
            code: 'F7',
            meaning: 'Stuck function key',
            cause: 'A control panel button is stuck or shorted.',
            diySteps: [
              'Check that no keypad button is stuck or has something resting on it.',
              'Power-cycle at the breaker.',
            ],
          },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        brandSlug: 'whirlpool-maytag',
        codes: [
          {
            code: 'F1 / F5',
            meaning: 'Control board fault',
            cause: 'Main oven control board issue.',
            diySteps: [
              'Power-cycle the range at the breaker.',
              'If it returns immediately, the control board likely needs replacing.',
            ],
          },
          {
            code: 'F3 / F4',
            meaning: 'Oven temperature sensor (RTD) fault',
            cause: 'Failed or disconnected temperature probe.',
            diySteps: [
              "This points to the oven temperature sensor (the metal probe on the back interior wall) — check that it isn't touching the oven wall.",
              "If it's not touching and the code persists, the sensor likely needs replacing.",
            ],
          },
        ],
      },
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: 'E76 / E77',
            meaning: 'Fan or motor error',
            cause: 'Convection fan motor fault.',
            diySteps: [
              'Power-cycle the range at the breaker.',
              'Check that nothing is blocking the convection fan vent inside the oven.',
            ],
          },
          {
            code: 'C-20 / C-d0',
            meaning: 'Door lock error (self-clean)',
            cause: 'Door lock motor or switch fault.',
            diySteps: [
              "Don't run self-clean again until it's inspected.",
              "Power-cycle at the breaker — if the door won't unlock, call us rather than forcing it.",
            ],
          },
        ],
      },
      {
        brand: 'Wolf, Viking & Thermador',
        brandSlug: 'wolf-viking-thermador',
        codes: [
          {
            code: 'Flashing "F" + number',
            meaning: 'Fault code — meaning is model-specific on professional ranges',
            cause: "These platforms don't share a common code set; we cross-reference against the model/serial number during diagnosis.",
            diySteps: [
              'Note the exact number shown and your model/serial number (usually inside the door frame).',
              'These platforms use model-specific codes — call us with that info for an accurate diagnosis.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'microwave',
    title: 'Microwave',
    serviceId: 'microwave-repair',
    brands: [
      {
        brand: 'GE',
        brandSlug: 'ge',
        codes: [
          {
            code: 'PF',
            meaning: 'Power failure',
            cause: 'Power was interrupted mid-cycle; usually clears after a reset.',
            diySteps: [
              'No action needed — this just logs a power interruption. Press Clear/Off and try again.',
            ],
          },
          {
            code: 'F1 / F2 / F3',
            meaning: 'Control board or keypad fault',
            cause: 'Main control board issue or a stuck keypad button.',
            diySteps: [
              'Power-cycle the microwave at the breaker or by unplugging it for 1 minute.',
              'Check the keypad for a stuck button.',
            ],
          },
        ],
      },
      {
        brand: 'Samsung',
        brandSlug: 'samsung',
        codes: [
          {
            code: 'dE / dE2',
            meaning: 'Door error',
            cause: 'Door switch not detecting a closed door.',
            diySteps: [
              'Firmly close the door until it clicks.',
              'Check the door latch for food debris or damage.',
            ],
          },
          {
            code: 'SE',
            meaning: 'Keypad/shorted button error',
            cause: 'Stuck or shorted keypad button.',
            diySteps: [
              'Check the keypad for a stuck or sticky button.',
              'Power-cycle by unplugging for 1 minute.',
            ],
          },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        brandSlug: 'whirlpool-maytag',
        codes: [
          {
            code: 'F-3E / F-7E',
            meaning: 'Keypad or door switch fault',
            cause: 'Stuck button or door switch issue.',
            diySteps: [
              'Check for a stuck keypad button.',
              'Firmly close the door and check the door switch area for obstructions.',
            ],
          },
        ],
      },
    ],
  },
];
