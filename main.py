from datetime import datetime

def define_env(env):
    # Define a macro that returns the current build date in UTC
    env.variables['build_date'] = datetime.utcnow().strftime('%B %d, %Y')