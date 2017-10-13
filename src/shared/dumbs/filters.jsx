import React from 'react'
import { Form, FormGroup, Col, Checkbox } from 'react-bootstrap'

export const FiltersScreenComponent = (props) =>
  <div>
    <Form horizontal className="filtersSection">
{/*
      <FormGroup className="filterGroupName">
        {'Ages'}
          <label className="checkbox-inline"><Checkbox</label>
            onChange={props.filterSelected} value="18 - 25" name="18"
            checked={props.filter.a}>{'18 - 25 ans'}
          </Checkbox>

          <label className="checkbox-inline"><Checkbox</label>
            onChange={props.filterSelected} value="toto" name="toto"
            checked={props.filter.b}>{'toto'}
          </Checkbox>

          <label className="checkbox-inline"><Checkbox>{'30 - 35 ans'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox>{'35 ans - +'}</Checkbox></label>
      </FormGroup>
*/}
      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Activité'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="student" name="student">{'Etudiant'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="employe" name="employe">{'Salarié'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="independant" name="independant">{'Indépendant'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherActivity" name="otherActivity">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Secteurs'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="it" name="it">{'Informatique'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="marketing" name="marketing">{'Marketing'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="architecture" name="architecture">{'Architecture'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="arts" name="arts">{'Arts'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="law" name="law">{'Droit'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="communication" name="communication">{'Communication'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="engineer" name="engineer">{'Ingénieurs'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherSecteurs" name="otherSecteurs">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Langues'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="french" name="french">{'Français'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="english" name="english">{'Anglais'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="spanish" name="spanish">{'Espagnol'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="chinese" name="chinese">{'Chinois'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="vlams" name="vlams">{'Néérlandais'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="dutch" name="dutch">{'Allemand'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="portuguese" name="portuguese">{'Portugais'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherLanguage" name="otherLanguage">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Loisirs'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="sports" name="sports">{'Sports'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="cinema" name="cinema">{'Cinéma / Théatre'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="artculture" name="artculture">{'Art / Culture'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="shopping" name="shopping">{'Shopping'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="cook" name="cook">{'Cuisine'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="geek" name="geek">{'Informatique'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="club" name="club">{'Clubbing / Concert'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherFun" name="otherFun">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Sports'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="running" name="running">{'Running'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="football" name="football">{'Foot'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="tennis" name="tennis">{'Tennis'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="ski" name="ski">{'Ski'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="fitness" name="fitness">{'Fitness'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="basket" name="basket">{'Basket'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="swim" name="swim">{'Natation'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherSports" name="otherSports">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Equipement'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="wifi" name="wifi">{'Wi-FI'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="tv" name="tv">{'Télévision'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="equipedkitchen" name="equipedkitchen">{'Cuisine équipée'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="terrasse" name="terrasse">{'Terrasse'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="individualToilet" name="individualToilet">{'WC séparé'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="individualBath" name="individualBath">{'Sdb privative'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="buanderie" name="buanderie">{'Buanderie'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherEquipement" name="otherEquipement">{'Autres'}</Checkbox></label>
      </FormGroup>

      <FormGroup className="filterGroupName">
        <p className="filterNameGroup">{'Musique'}</p>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="pop" name="pop">{'Pop'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="electro" name="electro">{'Electro'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="indie" name="indie">{'Indie'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="classic" name="classic">{'Classique'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="rock" name="rock">{'Rock'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="hiphop" name="hiphop">{'Hip-Hop / Rap'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="latino" name="latino">{'Latino'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox onChange={props.filterSelected} value="otherMusic" name="otherMusic">{'Autres'}</Checkbox></label>
      </FormGroup>
{/*
      <FormGroup className="filterGroupName">
        {'Toto'}
          <label className="checkbox-inline"><Checkbox>{'toto'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox>{'toto'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox>{'toto'}</Checkbox></label>
          <label className="checkbox-inline"><Checkbox>{'toto'}</Checkbox></label>
      </FormGroup>
*/}
    </Form>
  </div>
