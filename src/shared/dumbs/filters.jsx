import React from 'react'
import {
  Grid,
  Form,
  FormGroup,
  Col,
  Checkbox,
  Modal,
  Row
} from 'react-bootstrap'

export const FiltersScreenComponent = props => (
  <div>
    <Modal show={props.showModal} onHide={props.onClose} id="filterModal">
      <Modal.Header closeButton>
        <Modal.Title>{'Filtres'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form horizontal className="filtersSection">
          <table className="table">
            <td>
              <p className="filterNameGroup">{'Activité'}</p>
              <label for="student">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('student') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="student"
                  name="student"
                />{' '}
                {'Etudiant'}
              </label>
              <br />
              <label for="employe">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('employe') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="employe"
                  name="employe"
                />{' '}
                {'Salarié'}
              </label>
              <br />
              <label for="independant">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('independant') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="independant"
                  name="independant"
                />{' '}
                {'Indépendant'}
              </label>
              <br />
              <label for="otherActivity">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('otherActivity') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="otherActivity"
                  name="otherActivity"
                />{' '}
                {'Autres'}
              </label>
            </td>
            <td>
              <p className="filterNameGroup">{'Secteurs'}</p>

              <label for="it">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('it') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="it"
                  name="it"
                />{' '}
                {'Informatique'}
              </label>
              <br />

              <label for="marketing">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('marketing') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="marketing"
                  name="marketing"
                />{' '}
                {'Marketing'}
              </label>
              <br />

              <label for="architecture">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('architecture') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="architecture"
                  name="architecture"
                />{' '}
                {'Architecture'}
              </label>
              <br />

              <label for="arts">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('arts') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="arts"
                  name="arts"
                />{' '}
                {'Arts'}
              </label>
              <br />

              <label for="law">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('law') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="law"
                  name="law"
                />{' '}
                {'Droit'}
              </label>
              <br />

              <label for="communication">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('communication') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="communication"
                  name="communication"
                />{' '}
                {'Communication'}
              </label>
              <br />

              <label for="engineer">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('engineer') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="engineer"
                  name="engineer"
                />{' '}
                {'Ingénieurs'}
              </label>
              <br />

              <label for="otherSecteurs">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('otherSecteurs') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="otherSecteurs"
                  name="otherSecteurs"
                />{' '}
                {'Autres'}
              </label>
            </td>
            <td>
              <p className="filterNameGroup">{'Langues'}</p>
              <label for="french">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('french') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="french"
                  name="french"
                />{' '}
                {'Français'}
              </label>
              <br />

              <label for="english">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('english') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="english"
                  name="english"
                />{' '}
                {'Anglais'}
              </label>
              <br />

              <label for="spanish">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('spanish') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="spanish"
                  name="spanish"
                />{' '}
                {'Espagnol'}
              </label>
              <br />

              <label for="chinese">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('chinese') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="chinese"
                  name="chinese"
                />{' '}
                {'Chinois'}
              </label>
              <br />

              <label for="vlams">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('vlams') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="vlams"
                  name="vlams"
                />{' '}
                {'Néérlandais'}
              </label>
              <br />

              <label for="dutch">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('dutch') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="dutch"
                  name="dutch"
                />{' '}
                {'Allemand'}
              </label>
              <br />

              <label for="portuguese">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('portuguese') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="portuguese"
                  name="portuguese"
                />{' '}
                {'Portugais'}
              </label>
              <br />

              <label for="otherLanguage">
                <input
                  type="checkbox"
                  {...(props.joaoFilters.indexOf('otherLanguage') !== -1
                    ? { checked: 'true' }
                    : {})}
                  onChange={props.filterSelected}
                  value="otherLanguage"
                  name="otherLanguage"
                />{' '}
                {'Autres'}
              </label>
              <br />
            </td>
          </table>


<table className="table">
<td>
<p className="filterNameGroup">{'Loisirs'}</p>
          <label for="sports">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('sports') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="sports"
              name="sports"
            />{' '}
            {'Sports'}
          </label>
          <br />

          <label for="cinema">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('cinema') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="cinema"
              name="cinema"
            />{' '}
            {'Cinéma / Théatre'}
          </label>
          <br />

          <label for="artculture">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('artculture') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="artculture"
              name="artculture"
            />{' '}
            {'Art / Culture'}
          </label>
          <br />

          <label for="shopping">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('shopping') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="shopping"
              name="shopping"
            />{' '}
            {'Shopping'}
          </label>
          <br />

          <label for="cook">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('cook') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="cook"
              name="cook"
            />{' '}
            {'Cuisine'}
          </label>
          <br />

          <label for="geek">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('geek') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="geek"
              name="geek"
            />{' '}
            {'Informatique'}
          </label>
          <br />

          <label for="club">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('club') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="club"
              name="club"
            />{' '}
            {'Clubbing / Concert'}
          </label>
          <br />

          <label for="otherFun">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('otherFun') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="otherFun"
              name="otherFun"
            />{' '}
            {'Autres'}
          </label>
          <br />
</td>
<td></td>
<td></td>
</table>


          <p className="filterNameGroup">{'Sports'}</p>
          <label for="running">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('running') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="running"
              name="running"
            />{' '}
            {'Running'}
          </label>

          <label for="football">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('football') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="football"
              name="football"
            />{' '}
            {'Foot'}
          </label>

          <label for="tennis">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('tennis') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="tennis"
              name="tennis"
            />{' '}
            {'Tennis'}
          </label>

          <label for="ski">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('ski') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="ski"
              name="ski"
            />{' '}
            {'Ski'}
          </label>

          <label for="fitness">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('fitness') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="fitness"
              name="fitness"
            />{' '}
            {'Fitness'}
          </label>

          <label for="basket">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('basket') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="basket"
              name="basket"
            />{' '}
            {'Basket'}
          </label>

          <label for="swim">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('swim') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="swim"
              name="swim"
            />{' '}
            {'Natation'}
          </label>

          <label for="otherSports">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('otherSports') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="otherSports"
              name="otherSports"
            />{' '}
            {'Autres'}
          </label>

          <p className="filterNameGroup">{'Equipement'}</p>
          <label for="wifi">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('wifi') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="wifi"
              name="wifi"
            />{' '}
            {'Wi-FI'}
          </label>

          <label for="tv">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('tv') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="tv"
              name="tv"
            />{' '}
            {'Télévision'}
          </label>

          <label for="equipedkitchen">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('equipedkitchen') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="equipedkitchen"
              name="equipedkitchen"
            />{' '}
            {'Cuisine équipée'}
          </label>

          <label for="terrasse">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('terrasse') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="terrasse"
              name="terrasse"
            />{' '}
            {'Terrasse'}
          </label>

          <label for="individualToilet">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('individualToilet') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="individualToilet"
              name="individualToilet"
            />{' '}
            {'WC séparé'}
          </label>

          <label for="individualBath">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('individualBath') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="individualBath"
              name="individualBath"
            />{' '}
            {'Sdb privative'}
          </label>

          <label for="buanderie">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('buanderie') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="buanderie"
              name="buanderie"
            />{' '}
            {'Buanderie'}
          </label>

          <label for="otherEquipement">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('otherEquipement') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="otherEquipement"
              name="otherEquipement"
            />{' '}
            {'Autres'}
          </label>

          <p className="filterNameGroup">{'Musique'}</p>
          <label for="pop">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('pop') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="pop"
              name="pop"
            />{' '}
            {'Pop'}
          </label>

          <label for="electro">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('electro') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="electro"
              name="electro"
            />{' '}
            {'Electro'}
          </label>

          <label for="indie">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('indie') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="indie"
              name="indie"
            />{' '}
            {'Indie'}
          </label>

          <label for="classic">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('classic') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="classic"
              name="classic"
            />{' '}
            {'Classique'}
          </label>

          <label for="rock">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('rock') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="rock"
              name="rock"
            />{' '}
            {'Rock'}
          </label>

          <label for="hiphop">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('hiphop') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="hiphop"
              name="hiphop"
            />{' '}
            {'Hip-Hop / Rap'}
          </label>

          <label for="latino">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('latino') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="latino"
              name="latino"
            />{' '}
            {'Latino'}
          </label>

          <label for="otherMusic">
            <input
              type="checkbox"
              {...(props.joaoFilters.indexOf('otherMusic') !== -1
                ? { checked: 'true' }
                : {})}
              onChange={props.filterSelected}
              value="otherMusic"
              name="otherMusic"
            />{' '}
            {'Autres'}
          </label>
        </Form>
      </Modal.Body>
    </Modal>
  </div>
)
