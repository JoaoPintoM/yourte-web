import React from 'react'
import { Form, FormGroup, Col, Checkbox } from 'react-bootstrap'

export const FiltersScreenComponent = (props) =>
  <div>
    <Form horizontal>
      <FormGroup>
        {'Ages'}
          <Checkbox
            onChange={props.filterSelected} value="18 - 25" name="18"
            checked={props.filter.a}>{'18 - 25 ans'}
          </Checkbox>

          <Checkbox
            onChange={props.filterSelected} value="toto" name="toto"
            checked={props.filter.b}>{'toto'}
          </Checkbox>

          <Checkbox>{'30 - 35 ans'}</Checkbox>
          <Checkbox>{'35 ans - +'}</Checkbox>
      </FormGroup>

      <FormGroup>
        {'Activité'}
          <Checkbox>{'Etudiant'}</Checkbox>
          <Checkbox>{'Salarié'}</Checkbox>
          <Checkbox>{'Indépendant'}</Checkbox>
          <Checkbox>{'Autres'}</Checkbox>
      </FormGroup>

      <FormGroup>
        {'Toto'}
          <Checkbox>{'toto'}</Checkbox>
          <Checkbox>{'toto'}</Checkbox>
          <Checkbox>{'toto'}</Checkbox>
          <Checkbox>{'toto'}</Checkbox>
      </FormGroup>

    </Form>
  </div>
