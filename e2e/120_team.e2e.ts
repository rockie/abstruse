import { browser, by, element, ExpectedConditions } from 'protractor';
import { login, logout, waitForUrlToChangeTo, isLoaded, delay } from './utils';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;


describe('Teams', () => {
  before(() => login().then(() => browser.waitForAngularEnabled(false)));
  after(() => logout().then(() => browser.waitForAngularEnabled(true)));

  it('should see one user on team page', (): any => {
    return browser.get('/team')
      .then((): any => browser.wait(() => {
        return element.all(by.css('.team-user-item')).count().then(count => count === 1);
      }));
  });

  it(`logged in user can see all repositories he has permission to`, (): any => {
    return browser.get('/repositories')
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then((): any => element.all(by.css('.list-item-slim')).count())
      .then(cnt => expect(cnt).to.equals(5));
  });

  it('should add new user', (): any => {
    return browser.get('/team')
      .then((): any => browser.wait(() => {
        return element.all(by.css('.team-user-item')).count().then(count => count === 1);
      }))
      .then((): any => element.all(by.css('[name="btn-addUser"]')).first().click())
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('frank@gmail.com'))
      .then(() => element(by.css('.form-input[name="fullname"]')).sendKeys('Frank Milner'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test123'))
      .then(() => element(by.css('.form-input[name="repeat_password"]')).sendKeys('test123'))
      .then((): any => browser.wait(() => element(by.css(`[name="btn-saveNewUser"]`)).isEnabled()))
      .then(() => element.all(by.css(`[name="btn-saveNewUser"]`)).first())
      .then(ele => browser.executeScript('arguments[0].scrollIntoView();', ele.getWebElement()))
      .then(() => element(by.css('[name="btn-saveNewUser"]')).click())
      .then((): any => browser.wait(() => {
        return element.all(by.css('.team-user-item')).count().then(count => count === 2);
      }));
  });

  it('should redirect to team, user and then grant, revoke repository permission', (): any => {
    return browser.get('/team')
      .then((): any => {
        return browser.wait(() => element.all(by.css('.edit-user-button')).last().isPresent());
      })
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then((): any => waitForUrlToChangeTo('http://localhost:6500/user/2'))
      .then((): any => browser.wait(() => element(by.css(`[name="tab-permissions"]`)).isPresent()))
      .then((): any => browser.wait(() => element(by.css(`[name="tab-permissions"]`)).isEnabled()))
      .then((): any => element(by.css('[name="tab-permissions"]')).click())
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-green')).count().then(count => count === 4);
      }))
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-red')).count().then(count => count === 1);
      }))
      .then((): any => browser.wait(() => element.all(by.css(`[name="btn-removePermission"]`))
        .first().isPresent()))
      .then((): any => browser.wait(() => element.all(by.css(`[name="btn-removePermission"]`))
        .first().isEnabled()))
      .then((): any => browser.wait(() => ExpectedConditions.elementToBeClickable(
        element.all(by.css(`[name="btn-removePermission"]`)).first())))
      .then(() => element.all(by.css(`[name="btn-removePermission"]`)).first())
      .then(ele => browser.executeScript('arguments[0].scrollIntoView();', ele.getWebElement()))
      .then((): any => element.all(by.css('[name="btn-removePermission"]')).first().click())
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-green')).count().then(count => count === 3);
      }))
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-red')).count()
          .then(count => count === 2);
      }))
      .then((): any => browser.wait(() => element.all(by.css(`[name="btn-addPermission"]`))
        .first().isPresent()))
      .then((): any => browser.wait(() => element.all(by.css(`[name="btn-addPermission"]`))
        .first().isEnabled()))
      .then((): any => browser.wait(() => ExpectedConditions.elementToBeClickable(
        element.all(by.css(`[name="btn-addPermission"]`)).first())))
      .then(() => element.all(by.css(`[name="btn-addPermission"]`)).first())
      .then(ele => browser.executeScript('arguments[0].scrollIntoView();', ele.getWebElement()))
      .then((): any => element.all(by.css('[name="btn-addPermission"]')).first().click())
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-green')).count().then(count => count === 4);
      }))
      .then((): any => browser.wait(() => {
        return element.all(by.css('.border-red')).count().then(count => count === 1);
      }));
  });

  it(`should logout, access page as annonymous, see public builds but can't restart it`, () => {
    return logout()
      .then(() => browser.waitForAngularEnabled(false))
      .then(() => isLoaded())
      .then(() => browser.get('/login'))
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).to.equal('http://localhost:6500/login'))
      .then((): any => browser.wait(() => element(by.css('.centered-anonymous')).isPresent()))
      .then((): any => browser.wait(() => element(by.css('.centered-anonymous')).isEnabled()))
      .then((): any => element(by.css('.centered-anonymous')).click())
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then(() => browser.wait(() => element.all(by.css('.list-item')).count().then(cnt => {
        return cnt > 0;
      })))
      .then((): any => element.all(by.css('.restart-build')).count())
      .then(cnt => expect(cnt).to.equals(0));
  });

  it(`as annonymous can click on build but can't restart it`, (): any => {
    return browser.get('/')
      .then(() => isLoaded())
      .then(() => browser.wait(() => element(by.css('.list-item')).isPresent()))
      .then((): any => element.all(by.css('.list-item')).first().click())
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then(() => waitForUrlToChangeTo('http://localhost:6500/build/13'))
      .then((): any => element.all(by.css('[name="restart-build"]')).count())
      .then(cnt => expect(cnt).to.equals(0));
  });

  it(`as annonymous can click on build, job but can't restart it`, (): any => {
    return browser.get('/')
      .then(() => isLoaded())
      .then(() => browser.wait(() => element(by.css('.list-item')).isPresent()))
      .then((): any => element.all(by.css('.list-item')).first().click())
      .then(() => isLoaded())
      .then(() => browser.wait(() => element(by.css('.list-item-slim')).isPresent()))
      .then((): any => element.all(by.css('.list-item-slim')).first().click())
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then(() => waitForUrlToChangeTo('http://localhost:6500/job/13'))
      .then((): any => element.all(by.css('[name="restart-build"]')).count())
      .then(cnt => expect(cnt).to.equals(0));
  });

  it(`as annonymous user dashboard shouldn't be visible`, (): any => {
    return browser.get('/')
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then((): any => element(by.css('[name="dashboard"]')).isPresent())
      .then(present => expect(present).to.equals(false));
  });

  it(`as annonymous user can see public repositories`, (): any => {
    return browser.get('/repositories')
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then((): any => element.all(by.css('.list-item-slim')).count())
      .then(cnt => expect(cnt).to.equals(4));
  });

  it(`logout admin user and login with non admin user`, (): any => {
    return browser.get('/login')
      .then(() => isLoaded())
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('frank@gmail.com'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test123'))
      .then(() => element(by.css('.login-button')).click())
      .then(() => isLoaded());
  });

  it(`logged in user can see all repositories he has permission to`, (): any => {
    return browser.get('/repositories')
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then((): any => element.all(by.css('.list-item-slim')).count())
      .then(cnt => expect(cnt).to.equals(4));
  });

  it(`non admin user should see dashboard`, (): any => {
    return browser.get('/')
      .then(() => isLoaded())
      .then(() => delay(1000))
      .then((): any => element(by.css('[name="dashboard"]')).isDisplayed())
      .then(displayed => expect(displayed).to.equals(true));
  });

  it(`non admin user can update his name`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('.form-input[name="fullname"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="fullname"]')).sendKeys('2'))
      .then((): any => element.all(by.css('[name="save-user-data"]')).first().click())
      .then(() => browser.get('http://localhost:6500/user/2'))
      .then(() => browser.wait(() => element(by.css('.form-input[name="fullname"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="fullname"]')).getAttribute('value'))
      .then(txt => expect(txt).to.equals('Frank Milner2'));
  });

  it(`non admin user can update his email`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('.form-input[name="email"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('2'))
      .then((): any => element.all(by.css('[name="save-user-data"]')).first().click())
      .then(() => browser.get('http://localhost:6500/user/2'))
      .then(() => browser.wait(() => element(by.css('.form-input[name="email"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="email"]')).getAttribute('value'))
      .then(txt => expect(txt).to.equals('frank@gmail.com2'));
  });

  it(`non admin user can change his password`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('.form-input[name="password"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test321'))
      .then((): any => element(by.css('[name="change-password"]')).click())
      .then(() => logout())
      .then(() => browser.waitForAngularEnabled(false))
      .then(() => browser.get('/login'))
      .then(() => isLoaded())
      .then(() => browser.wait(() => element(by.css('.form-input[name="email"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('frank@gmail.com2'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test321'))
      .then(() => element(by.css('.login-button')).click())
      .then(() => isLoaded())
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).to.equal('http://localhost:6500/'));
  });

  it(`non admin user cannot update password from some other user`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).first().click())
      .then(() => browser.wait(() => element(by.css('.form-input[name="password"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test321'))
      .then(() => element(by.css('[name="change-password"]')).isEnabled())
      .then(enabled => expect(enabled).to.equal(false));
  });

  it(`non admin cannot set himeself as admin`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('[name="email"]')).isPresent()))
      .then(() => element.all(by.css('[name="admin"]')).count())
      .then(cnt => expect(cnt).to.equals(0));
  });

  it(`non admin user can add his access token`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('[name="tab-tokens"]')).isPresent()))
      .then((): any => element(by.css('[name="tab-tokens"]')).click())
      .then(() => element.all(by.css('.access-token-item')).count())
      .then(cnt => expect(cnt).to.equal(0))
      .then(() => browser.wait(() => {
        return element(by.css('.form-input[name="token_description"]')).isPresent();
      }))
      .then(() => element(by.css('.form-input[name="token_description"]')).sendKeys('test'))
      .then(() => element(by.css('.form-input[name="token"]')).sendKeys('a22142wfafwa12431'))
      .then((): any => element.all(by.css('[name="add-token"]')).first().click())
      .then(() => browser.wait(() => element(by.css('.access-token-item')).isPresent()))
      .then(() => element.all(by.css('.access-token-item')).count())
      .then(cnt => expect(cnt).to.equal(1));
  });

  it(`non admin user can remove his access token`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('[name="tab-tokens"]')).isPresent()))
      .then((): any => element(by.css('[name="tab-tokens"]')).click())
      .then(() => element.all(by.css('.access-token-item')).count())
      .then(cnt => expect(cnt).to.equal(1))
      .then((): any => element.all(by.css('[name="btn-removeToken"]')).first().click())
      .then(() => delay(100))
      .then(() => element.all(by.css('.access-token-item')).count())
      .then(cnt => expect(cnt).to.equal(0));
  });

  it(`logout non admin user and login with admin`, () => {
    return logout()
      .then(() => login())
      .then(() => browser.waitForAngularEnabled(false))
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).to.equal('http://localhost:6500/'));
  });

  it(`admin can set other user as admin`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('[name="admin"]')).isPresent()))
      .then(() => browser.wait(() => element(by.css('.toggle-button')).isPresent()))
      .then((): any => element.all(by.css('.toggle-button')).first().click())
      .then((): any => element.all(by.css('[name="save-user-data"]')).first().click())
      .then(() => browser.get('/team'))
      .then(() => browser.wait(() => element(by.css('[name="user-type"]')).isPresent()))
      .then(() => element.all(by.css('[name="user-type"]')).last().getAttribute('innerHTML'))
      .then(html => expect(html).to.include('admin'));
  });

  it(`admin can update other user's password`, (): any => {
    return browser.get('/team')
      .then(() => browser.wait(() => element(by.css('.edit-user-button')).isPresent()))
      .then((): any => element.all(by.css('.edit-user-button')).last().click())
      .then(() => browser.wait(() => element(by.css('.form-input[name="password"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test111'))
      .then((): any => element.all(by.css('[name="change-password"]')).first().click())
      .then(() => logout())
      .then(() => browser.waitForAngularEnabled(false))
      .then(() => browser.get('/login'))
      .then(() => isLoaded())
      .then(() => browser.wait(() => element(by.css('.form-input[name="email"]')).isPresent()))
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('frank@gmail.com2'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test111'))
      .then(() => element(by.css('.login-button')).click())
      .then(() => isLoaded())
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).to.equal('http://localhost:6500/'));
  });
});
