export interface ErrorCode {
  code: string;
  meaning: string;
  cause: string;
}

export interface BrandCodes {
  brand: string;
  codes: ErrorCode[];
}

export interface ApplianceCodes {
  slug: string;
  title: string;
  serviceId: string;
  brands: BrandCodes[];
}

export const errorCodes: ApplianceCodes[] = [
  {
    slug: 'washer',
    title: 'Washer',
    serviceId: 'washer-repair',
    brands: [
      {
        brand: 'Samsung',
        codes: [
          { code: '4E / 4E1', meaning: 'Water supply/fill error', cause: 'Water valve turned off, kinked supply hose, or low household water pressure.' },
          { code: 'LE / LE1', meaning: 'Leakage detected in the tub', cause: 'Failed drain pump, worn tub seal, or a blocked drain line.' },
          { code: 'OE / 3E', meaning: 'Overflow or motor/drain error', cause: 'Drain hose kinked or clogged, or a failing drain pump.' },
          { code: 'UE / UB', meaning: 'Unbalanced load', cause: 'Load shifted to one side; if it repeats every cycle, often worn suspension springs.' },
        ],
      },
      {
        brand: 'LG',
        codes: [
          { code: 'LE', meaning: 'Motor locked rotor', cause: 'Drive motor or motor control board fault, sometimes triggered by an overloaded drum.' },
          { code: 'UE', meaning: 'Unbalanced load', cause: 'Load redistribution needed; recurring UE can mean worn suspension.' },
          { code: 'OE', meaning: 'Drain error', cause: 'Clogged drain filter/pump, or a kinked drain hose.' },
          { code: 'dE / dE2', meaning: 'Door not detected as closed', cause: 'Door latch or door lock assembly failure.' },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        codes: [
          { code: 'F5 E2 / F5 E3', meaning: 'Door lock error', cause: 'Failed door lock/switch assembly on front-load models.' },
          { code: 'F7 E1', meaning: 'Motor drive error', cause: 'Motor control board or wiring fault.' },
          { code: 'F8 E1', meaning: 'Water fill error', cause: 'Water inlet valve issue or low household water pressure.' },
          { code: 'Sud / SUdS', meaning: 'Excess suds detected', cause: 'Too much detergent, or a non-HE detergent used in an HE machine.' },
        ],
      },
      {
        brand: 'GE',
        codes: [
          { code: 'dE / dC', meaning: 'Door/lid not latched', cause: 'Lid lock/switch failure, or the door isn’t fully closing.' },
          { code: 'IE', meaning: 'Water fill/inlet error', cause: 'Water supply valve closed, or a faulty inlet valve.' },
          { code: 'oE', meaning: 'Overflow condition', cause: 'Drain hose height/routing issue, or a stuck-open water valve.' },
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
        codes: [
          { code: 'HE / hE', meaning: 'Heating error', cause: 'Failed heating element or thermal fuse.' },
          { code: 'tE / tE1', meaning: 'Thermistor error', cause: 'Faulty temperature sensor.' },
          { code: 'dE / dE1', meaning: 'Door error', cause: 'Door switch not detecting a closed door.' },
        ],
      },
      {
        brand: 'LG',
        codes: [
          { code: 'dE', meaning: 'Door error', cause: 'Door switch or latch fault.' },
          { code: 'tE', meaning: 'Thermistor error', cause: 'Faulty temperature sensor.' },
          { code: 'AE', meaning: 'Moisture sensor error', cause: 'Sensor bar needs cleaning, or a sensor circuit fault.' },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        codes: [
          { code: 'PF', meaning: 'Power failure detected', cause: 'Household power was interrupted mid-cycle; usually clears on its own.' },
          { code: 'F1', meaning: 'Control board error', cause: 'Main control board fault.' },
          { code: 'E1 / F70', meaning: 'Thermistor or communication error (model-dependent)', cause: 'Sensor or wiring fault — exact meaning varies by model number.' },
        ],
      },
      {
        brand: 'GE',
        codes: [
          { code: 'E1', meaning: 'Thermistor open circuit', cause: 'Faulty temperature sensor.' },
          { code: 'E2', meaning: 'Thermistor short circuit', cause: 'Faulty temperature sensor or wiring.' },
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
        codes: [
          { code: '22 C / 22 E', meaning: 'Defrost sensor error', cause: 'Faulty defrost sensor or wiring.' },
          { code: '5E / 5E1', meaning: 'Ice maker error', cause: 'Ice maker fan or sensor fault.' },
        ],
      },
      {
        brand: 'LG',
        codes: [
          { code: 'Er FF', meaning: 'Freezer sensor fault', cause: 'Faulty freezer compartment temperature sensor.' },
          { code: 'Er rF', meaning: 'Fridge sensor fault', cause: 'Faulty refrigerator compartment temperature sensor.' },
        ],
      },
      {
        brand: 'GE, Whirlpool & Sub-Zero',
        codes: [
          {
            code: 'Blinking light / panel alert',
            meaning: 'Most GE, Whirlpool, and Sub-Zero refrigerators don’t use a shared numeric fault code system',
            cause: 'Meaning is model-specific — check your use & care guide, or call us and we’ll pull the actual fault with diagnostic tools.',
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
        codes: [
          { code: 'E15', meaning: 'Leak sensor tripped (Aquastop)', cause: 'Water detected in the base pan — could be an active leak or a failed float switch.' },
          { code: 'E24', meaning: 'Drain error', cause: 'Clogged drain pump, hose, or air gap.' },
          { code: 'E01', meaning: 'Heating circuit fault', cause: 'Failed heating element or thermostat.' },
        ],
      },
      {
        brand: 'Samsung',
        codes: [
          { code: 'LC / LE', meaning: 'Leak detected', cause: 'Leak sensor tripped in the base pan.' },
          { code: 'OE / 5E', meaning: 'Drain error', cause: 'Clogged filter, drain hose, or pump.' },
          { code: 'HE', meaning: 'Heating error', cause: 'Failed heating element.' },
        ],
      },
      {
        brand: 'Whirlpool, Maytag & GE',
        codes: [
          {
            code: 'F1 – F9 (model-dependent)',
            meaning: 'Control board, motor, or sensor fault',
            cause: 'Exact meaning varies significantly by model year — check your use & care guide, or call for an exact read.',
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
        codes: [
          { code: 'F1 / F2 / F3', meaning: 'Control board or sensor fault', cause: 'Oven temperature sensor or control board issue.' },
          { code: 'F7', meaning: 'Stuck function key', cause: 'A control panel button is stuck or shorted.' },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        codes: [
          { code: 'F1 / F5', meaning: 'Control board fault', cause: 'Main oven control board issue.' },
          { code: 'F3 / F4', meaning: 'Oven temperature sensor (RTD) fault', cause: 'Failed or disconnected temperature probe.' },
        ],
      },
      {
        brand: 'Samsung',
        codes: [
          { code: 'E76 / E77', meaning: 'Fan or motor error', cause: 'Convection fan motor fault.' },
          { code: 'C-20 / C-d0', meaning: 'Door lock error (self-clean)', cause: 'Door lock motor or switch fault.' },
        ],
      },
      {
        brand: 'Wolf, Viking & Thermador',
        codes: [
          {
            code: 'Flashing "F" + number',
            meaning: 'Fault code — meaning is model-specific on professional ranges',
            cause: 'These platforms don’t share a common code set; we cross-reference against the model/serial number during diagnosis.',
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
        codes: [
          { code: 'PF', meaning: 'Power failure', cause: 'Power was interrupted mid-cycle; usually clears after a reset.' },
          { code: 'F1 / F2 / F3', meaning: 'Control board or keypad fault', cause: 'Main control board issue or a stuck keypad button.' },
        ],
      },
      {
        brand: 'Samsung',
        codes: [
          { code: 'dE / dE2', meaning: 'Door error', cause: 'Door switch not detecting a closed door.' },
          { code: 'SE', meaning: 'Keypad/shorted button error', cause: 'Stuck or shorted keypad button.' },
        ],
      },
      {
        brand: 'Whirlpool & Maytag',
        codes: [
          { code: 'F-3E / F-7E', meaning: 'Keypad or door switch fault', cause: 'Stuck button or door switch issue.' },
        ],
      },
    ],
  },
];
