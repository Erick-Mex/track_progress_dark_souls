export interface Data {
    "dark-souls-1": DarkSouls1;
    "dark-souls-2": DarkSouls2;
    "dark-souls-3": DarkSouls3;
}

export interface BossInfo {
    id:       string;
    name:     string;
    image:    string;
    location: string;
}

export interface DarkSouls1 {
    "no-dlc": BossInfo[];
    dlc:      DarkSouls1_Dlc;
}

export interface DarkSouls1_Dlc {
    artorias: BossInfo[];
}

export interface DarkSouls2 {
    "no-dlc": BossInfo[];
    dlc:      DarkSouls2_Dlc;
}

export interface DarkSouls2_Dlc {
    "sunken-king":   BossInfo[];
    "old-iron-king": BossInfo[];
    "ivory-king":    BossInfo[];
}

export interface DarkSouls3 {
    "no-dlc": BossInfo[];
    dlc:      DarkSouls3_Dlc;
}

export interface DarkSouls3_Dlc {
    ariandel:      BossInfo[];
    "ringed-city": BossInfo[];
}

type DLC = DarkSouls1_Dlc | DarkSouls2_Dlc | DarkSouls3_Dlc;

export interface Example {
    "no-dlc": BossInfo[];
    dlc: DLC;
}