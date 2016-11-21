import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, StyleSheet } from 'react-native';
import { SoundboardItem } from './SoundboardItem'

export class Soundboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={styles.soundboard}>
        {sounds.map((sound, i) => <SoundboardItem key={i} data={sound}></SoundboardItem>)}
      </ScrollView>
    );
  }
}

const sounds = [
  {title: 'Albenia', sound: 'albenia'},
  {title: 'Wat is een diadeem?', sound: 'wat_is_een_diadeem_1'},
  {title: 'Wat is een diadeem?', sound: 'wat_is_een_diadeem_2'},
  {title: 'Helemaal niks', sound: 'helemaal_niks'},
  {title: 'Hahahahah', sound: 'hahahah'},
  {title: 'Om iets fijn te maken', sound: 'om_iets_fijn_te_maken'},
  {title: 'Nou nee', sound: 'nou_nee'},
  {title: 'My husband is antie care !', sound: 'my_husband'},
  {title: 'Huuuu', sound: 'huuuu'},
  {title: 'Like this if you cry evertim', sound: 'cry_evertim'},
  {title: 'Leuk dat je me even interviewt', sound: 'leuk_dat_je_me_interviewt'},
  {title: 'Om koekjes te rapsen', sound: 'koekjes_rapsen_1'},
  {title: 'Dat is een raps', sound: 'koekjes_rapsen_2'},
  {title: 'Het is toch raps?', sound: 'koekjes_rapsen_3'},
  {title: 'Daar is een stellage', sound: 'stellage'},
  {title: 'Shut the fuck up', sound: 'shut_the_fuck_up'},
  {title: 'Meer of minder', sound: 'meer_of_minder'},
  {title: 'Mysqli ajax', sound: 'mysqli_ajax'},
  {title: 'Haha BIER', sound: 'haha_bier'},
  {title: 'Ben je blij met de snelheid van je bestelling', sound: 'snelheid_bestelling'},
  {title: 'Handtekening!', sound: 'handtekening'},
  {title: 'Ik vind helemaal hartstikke mooi', sound: 'helemaal_hartstikke_mooi'},
  {title: 'Is perfect, mooi', sound: 'is_perfect_mooi'},
  {title: 'Ik gooi in de water', sound: 'in_de_water'},
  {title: 'How to pay hiervoor?', sound: 'fietsopa_1'},
  {title: 'You ask no money', sound: 'fietsopa_2'},
  {title: 'What, no money?', sound: 'fietsopa_3'},
  {title: 'Suck a cock', sound: 'fietsopa_4'},
  {title: 'Suck it', sound: 'fietsopa_5'},
  {title: 'Suck it 2', sound: 'fietsopa_6'},
  {title: 'Hé swa', sound: 'kankerjong_1'},
  {title: 'Kankerjong', sound: 'kankerjong_2'},
  {title: 'Intro', sound: 'intro'},
  {title: 'Ziekenhuis', sound: 'ziekenhuis'},
  {title: 'Ah kut zooi', sound: 'oma_plakband_1'},
  {title: 'Idioot!', sound: 'oma_plakband_2'},
  {title: 'Halve gare', sound: 'oma_plakband_3'},
  {title: 'Fuck her right in the pussy', sound: 'pussy'},
  {title: 'Ik neuk jullie allemaal de moeder', sound: 'neuk_jullie_de_moeder'},
  {title: 'Thug life', sound: 'thug_life'},
  {title: 'Ik ga ook geen kaartje kopen', sound: 'kaartje_kopen'},
  {title: 'Jij moet echt uitkijken', sound: 'uitkijken'},
  {title: 'Jullie spelen met mijn privé', sound: 'spelen_prive'},
  {title: 'Boodschap', sound: 'boodschap'},
  {title: 'Can I film you', sound: 'can_i_film_you'},
  {title: 'Hahaha', sound: 'hahaha'},
  {title: 'Intro flabber', sound: 'intro_flabber'},
  {title: 'Jij komen hier in Sittard', sound: 'sittard_1'},
  {title: 'Lef', sound: 'sittard_2'},
  {title: 'Whaha_houw', sound: 'sittard_3'},
  {title: 'Control + Alt + Delete', sound: 'ctrl_alt_delete'},
  {title: 'Daar is ie weer', sound: 'daar_is_ie_weer'},
  {title: 'NICE!', sound: 'nice'},
  {title: 'Vrouwen orgasme', sound: 'orgasme'},
  {title: '1 plaatje', sound: 'hyvesmevrouw_1'},
  {title: 'Op hyves', sound: 'hyvesmevrouw_2'},
  {title: 'Pindakaas', sound: 'pindakaas'},
  {title: 'Als een hertje', sound: 'marijke_1'},
  {title: 'En de slechte adem is verdwenen', sound: 'marijke_2'},
  {title: 'Komkommer', sound: 'marijke_3'},
  {title: 'Vier', sound: 'marijke_4'},
  {title: 'Vijf', sound: 'marijke_5'},
  {title: 'Je hebt nooit geen geld (remix)', sound: 'je_hebt_nooit_geen_geld_remix'},
  {title: 'Elke zweetneus van je sokken krijgt iedereen', sound: 'zweetneus_sokken'},
  {title: 'Tyfuslijer', sound: 'tyfuslijer'},
  {title: 'Je hebt nooit geen geld', sound: 'je_hebt_nooit_geen_geld'},
  {title: 'Op je muil', sound: 'op_je_muil'},
  {title: 'Kachel', sound: 'kankerkachel'},
  {title: 'Donker, zwart en liefde', sound: 'donker_zwart_liefde'},
  {title: 'Gewoon heel mooi', sound: 'gewoon_heel_mooi'},
  {title: 'Hedde hedde drugs op', sound: 'drugsmevrouw_1'},
  {title: 'Yo ik zie je zo', sound: 'drugsmevrouw_2'},
  {title: 'DOEI DAAAAAAG', sound: 'doei_dag'},
  {title: 'Lerarenkamer', sound: 'heydrich_1'},
  {title: 'Ik ga dat toch lekker zeggen', sound: 'heydrich_2'},
  {title: 'Pipi', sound: 'heydrich_3'},
  {title: 'Bijzondere pipi', sound: 'heydrich_4'},
  {title: 'Jij bent kut', sound: 'jij_bent_kut'},
]

const styles = {
  soundboard: {
    margin: 20
  }
}
