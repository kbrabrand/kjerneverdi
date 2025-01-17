import moment from 'moment'

const coreValues = [
  'Nærhet',
  'Miljøomtanke',
  'Smidighet',
  'Medgjørlighet',
  'Lemfeldighetsorientert',
  'Prosessorientert',
  'Dagdristig',
  'Overførbarhet',
  'Sikkerhetsbelastende',
  'Kundesmigring',
  'Kvalitetsbevisthet',
  'Angulærtilnærming',
  'Medmenneskelighet',
  'Unnvikelsesoppsøkende',
  'Sjanseutredelsesutfordrende',
  'Velrenomert',
  'Reklamasjonsutredende',
  'Slurveavskaffende',
  'Integritetsoffensiv',
  'Tilgjengelighet',
  'Mangfoldighet',
  'Nyskapende',
  'Virksomhetsorientert',
  'Multimedialitet',
  'Visjonsinnsmigrende',
  'Handlekraftig',
  'Profesjonalisme',
  'Respektoffentliggjøring',
  'Inklusjonsskapende',
  'Humørutflatende',
  'Bærekraftig',
  'Avanseavsettende',
  'Rundbøyelig',
  'Forfriskendefaktorering',
  'Vedlikeholdsstategi',
  'Talerørsorientert',
  'Kommisererende',
  'Tverrorientert',
  'Fullmaktsoppdrivende',
  'Elevasjonssporende',
  'Materialutfoldende',
  'Muntermangsom',
  'Bimedial',
  'Målgruppebevissttenkende',
  'Utmarksdigitalitet',
  'Blåpapirfokusert',
  'Utredningsundersøkende',
  'Tåkepratfokusert',
  'Vanvittighetsorientert',
  'Utilstrekkelighetsbasert',
  'Mellomlederstyrt',
  '',
  '',
  '',
]

function getCoreValue() {
  const weekNumber = moment().week()
  return coreValues[weekNumber - 1]
}

export {getCoreValue}
